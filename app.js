// import packages
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');


const MORGAN_TYPE = 'dev';
/**
 * Type: dev , combined, tiny, short
 */
// init middleware
app.use(morgan(MORGAN_TYPE));
app.use(helmet());
app.use(compression());

// init db
// require('./dbs/init.mongodb.level0')
require('./dbs/init.mongodb')


// init routes
app.get('/', (req, res, next) => {
  const strCompress = 'Hello The Tips Javascript!'
  return res.status(200).json({ 
    message: 'Welcome FanTipJS',
    meta :  strCompress.repeat(1)
  });
});

// handling errors

module.exports = app;
