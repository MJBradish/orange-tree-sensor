const Sensor = require ("./sensor");
const moisture = new Sensor ("moisture");
const temperature = new Sensor ("temperature");
console.log(moisture.getType ())
console.log(temperature.getType ())

async function takereadings (){
  let moisturereading = await moisture.read ()
  let temperaturereading = await temperature.read ()
  console.log(moisturereading, "\n",
  temperaturereading);
}
takereadings ()
