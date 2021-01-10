const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  details: String,
  date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
