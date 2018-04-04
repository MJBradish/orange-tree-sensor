class Sensor {
  constructor (type){
    console.log("hello, my name is " + type);
    this.type = type;
  }

  getType (){
    return this.type;
  }

  // return reading
  read (){
    return 5
  }
}

module.exports=Sensor;
