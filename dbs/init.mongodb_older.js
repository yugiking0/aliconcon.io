'use strict';

F


class Database {

  constructor() {
    this.connect()
  }
  console.log('233335')
  // connect  
  connect(type = 'mongodb'){
    console.log('5');
    if (1 === 0){ // dev
      mongoose.set('debug', true);
      mongoose.set('debug', {color : true});
    } 

    mongoose.connect(connectString).then( _ => console.log(`Connect MongoDB PRO success.`))
    .catch((err) => console.log(`Error connect!!!`));
  }

  static getInstance(){
    console.log('1');
    if(!Database.getInstance){
      console.log('2');
      Database.getInstance = new Database();
    }
    else{
      console.log('3');
    }
    console.log('4');
    return Database.getInstance;
  }
}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;