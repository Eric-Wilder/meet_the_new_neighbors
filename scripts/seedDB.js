const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Neighbor Profiles collection and inserts the Profiles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/neighborprofiles"
);

const profileSeed = [
  {
    lastName: "Smith",
    firstName: "Alex",
    details: "Moved to Oak Hill, VA from Bremerton, WA.  My wife's name is Elizabeth.  We have 2 children: Hayes and Hudson",
    date: new Date(Date.now())
  }
];

db.Profile
  .remove({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
