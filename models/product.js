// this page has been updated COMPLETE Before testing
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  year: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  torque: {
    type: String,
    required: true
  },
  engine: {
    type: String,
    required: true
  },
  sixty: {
    type: Number,
    required: true
  },
  topSpeed: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hp: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Product', productSchema);