const express = require('express');

const app = express();
app.get('/', (req, res, next) => {
   res.send('API root');
});

app.post('/parse', (req, res, next) => {
   const data = req.body;
   console.log(data);
   res.send('API parse');
});
// export the server middleware
module.exports = {
   path: '/api',
   handler: app,
};
