'use strict';

const mongoose = require('mongoose');
const connectString = `mongodb://localhost:27017/shopDev`;
const {countConnect, checkOverload} = require('../helpers/check.connect');


class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      // dev
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }

    mongoose
      .connect(connectString)
      .then(() =>{
        // countConnect() // Check number of connection
        checkOverload() // Check overload 
        console.log(`Connect MongoDB PRO success.`)
      }) 
      .catch((err) => console.log(`Error connect!!!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
