const Sensor = require ("./sensor");
const ReadingA = new Sensor ("Moisture sensor");
const ReadingB = new Sensor ("Temperature sensor");
console.log(ReadingA.getType ())
console.log(ReadingB.getType ())
console.log(ReadingA.read ())
