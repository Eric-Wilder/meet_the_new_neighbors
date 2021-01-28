const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  family: { type: String, required: true },
  email:  { type: String, required: true },
  address: { type: String, required: true },
  numAdults: Number,
  adultsName: String,
  numKids: Number,
  kidsName: String,
  numPets: Number,
  petsName: String,
  likes: String, 
  photo: { type: String, default: ""},
  date: { type: Date, default: Date.now }
});

const Family = mongoose.model("Family", familySchema);

module.exports = Family;
