const PythonShell = require('python-shell');
const SCRIPTS = {
  moisture : "scripts/moisture.py",
  light : "scripts/light.py",
  temperature : "scripts/temperature.py",
  pressure : "scripts/pressure.py",
}

let readings = {};
let readPromises = {};

const	readSensor = (type)=>{
  //I'm already doing you a reading!
  if(readings[type]){return readPromises[type]}
  else {
    //I'll get you a new reading
    readPromises[type] = new Promise((resolve,reject)=>{
      if(!SCRIPTS[type]) reject("No sensor for "+type);
      PythonShell.run(SCRIPTS[type],{},function(err,data){
        readings[type] = false;
        if (err) return reject(err)
        return resolve(data[0])
      })
    })
    readings[type] = true;
    return readPromises[type]
  }
}

module.exports = readSensor;
