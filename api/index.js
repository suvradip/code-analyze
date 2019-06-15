require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Comb = require('csscomb');
const jwt = require('jsonwebtoken');
const HTMLHint = require('htmlhint').default;

const tokenVerify = require('./tokenVerify');

const secret = process.env.SECRET || 'myLittileSecret';
const comb = new Comb();
const app = express();

app.use(cookieParser());

// parse: requested data in JSON
app.use(bodyParser.json());

// parse: requested data in application/x-www-form-urlencoded
app.use(
   bodyParser.urlencoded({
      extended: false,
   })
);

const HTML_LINT_RULES = {
   // 'doctype-first': true,
   'tagname-lowercase': true,
   'attr-lowercase': true,
   'attr-value-double-quotes': true,
   'tag-pair': true,
   'spec-char-escape': true,
   'id-unique': true,
   'src-not-empty': true,
   'attr-no-duplication': true,
   'title-require': true,
};

app.get('/', (req, res, next) => {
   res.json({
      success: true,
      message: 'Api(s) are working fine.',
   });
});

app.post('/authentication', (req, res, next) => {
   const { username } = req.body;
   const { password } = req.body;
   // For the given username fetch user from DB
   const mockedUsername = 'admin';
   const mockedPassword = 'password';

   if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
         const token = jwt.sign({ username }, secret, {
            expiresIn: '24h', // expires in 24 hours
         });

         res.cookie('authToken', token, { maxAge: 900000, httpOnly: false });

         res.json({
            token,
            success: true,
            message: 'Authentication successful!',
         });
      } else {
         res.statusCode(403).json({
            success: false,
            message: 'Incorrect username or password',
         });
      }
   } else {
      res.statusCode(400).json({
         success: false,
         message: 'Authentication failed! Please check the request',
      });
   }
});

app.post('/verify', tokenVerify, (req, res) => {
   res.json({
      success: true,
   });
});

app.post('/parse', tokenVerify, async (req, res, next) => {
   const { language, code } = req.body;
   if (!language || !code) {
      res.send('code or language is/are missing').end();
   }

   let data = [];
   if (language === 'css') {
      try {
         const msg = await comb.processString(code);
         if (msg) {
            data.push({
               message: 'No errors',
            });
         }
      } catch (error) {
         data.push({
            line: error.line,
            message: error.stack.split('#').shift(),
         });
      }
   }

   if (language === 'html') {
      const msg = HTMLHint.verify(code, HTML_LINT_RULES);
      data = data.concat(msg);
   }

   res.json({
      language,
      result: data,
   }).end();
});

module.exports = {
   path: '/api',
   handler: app,
};
