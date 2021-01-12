const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  family: { type: String, required: true },
  address: { type: String, required: true },
  adultsName: String,
  kidsName: String,
  petsName: String,
  likes: String, 
  date: { type: Date, default: Date.now }
});

const Family = mongoose.model("Family", familySchema);

module.exports = Family;
