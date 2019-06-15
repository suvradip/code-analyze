const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'myLittileSecret';

const checkToken = async (req, res, next) => {
   // Express headers are auto converted to lowercase
   let token = req.headers['x-access-token'] || req.headers.authorization || req.cookies.authToken;
   if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
   }

   if (token) {
      try {
         const result = await jwt.verify(token, secret);
         if (result) {
            req.decoded = result;
            return next();
         }
      } catch (error) {
         /* reset the token value  */
         res.cookie('authToken', '');
         return res.json({
            success: false,
            message: 'Token is not valid',
         });
      }
   }

   return res.json({
      success: false,
      message: 'Auth token is not supplied',
   });
};

module.exports = checkToken;
