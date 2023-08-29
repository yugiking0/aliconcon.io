'use strict';

const mongoose = require('mongoose');
const connectString = `mongodb://localhost:27017/shopDev`;

mongoose.connect(connectString)
.then(() => console.log(`Connect MongoDB success.`))
.catch((err) => console.log(`Error connect!!!`));

if (1 === 1){ // dev
  mongoose.set('debug', true);
  mongoose.set('debug', {color : true});
} 

module.exports = mongoose;
