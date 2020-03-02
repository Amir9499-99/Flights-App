const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const destinationSchema = new Schema({
  airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
  arrival: {type: Date, default: function () {
      return new Date();
    }},
})

const flightSchema = new Schema({
    airline: { type: String, enum: ['American', 'Southwest', 'United']},
    flightNo: { type: Number, min: 10, max: 9999},
    departs: {type: Date, default: function () {
      return new Date();
    }},
    airport: {type: String, default: 'DEN', enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    destination: [destinationSchema],
    arrival: [destinationSchema]
}); 


module.exports = mongoose.model(
  'Flight',
  flightSchema
);