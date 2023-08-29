'use strict';
const mongoose = require('mongoose');
const os = require('os'); // Lấy thông số hệ thống
const process = require('process'); // Lấy các tiến trình hệ thống

const _SECONDS = 5000; // 5s check connect
// count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connection ::: ${numConnection}`);
}

// check overload 
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCore = os.cpus().length; // Số lượng core của CPU
    const memoryUsage = process.memoryUsage().rss;

    console.log(`Memory usage ::${memoryUsage /1024 /1024}`);
    // Example maximum number of connections based on number of cores is 5 connect
    const maxConnections = numCore * 5;

    if(numConnection > maxConnections){
      console.log(`Connection overload detected.`);
    }

    console.log(memoryUsage);


  }, _SECONDS);} // Kiểm tra mỗi 5s - Monitor every 5 seconds

module.exports = {
  countConnect,
  checkOverload
}


