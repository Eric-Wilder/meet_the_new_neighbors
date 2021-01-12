const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/familyList"
);

const familySeed = [
  {
    family: "The Bat Family",
    address: "52 Gotham Drive",
    adultsName: "Bruce Wayne, Alfred Pennyworth",
    kidsName: "Duke Thomas, Dick Grayson, Cassandra Cain, Damian Wayne",
    petsName: "Wolf",
    likes: "Beating Up Jokers",
    date: new Date(Date.now())
  },
  {
  family: "The Kent Family",
  address: "88 Kyrpton Ave",
  adultsName: "Clark Kent, Lois Lane Kent",
  kidsName: "Jon Kent",
  petsName: "Kyrpto",
  likes: "Flying Thru The Sky",
  date: new Date(Date.now())
},
{
  family: "The Avengers Family",
  address: "11 Sheild Street",
  adultsName: "Captain America, Black Widow",
  kidsName: "Thor, Hulk, She-Hulk",
  petsName: "Loki",
  likes: "Finding Stones",
  date: new Date(Date.now())
},
];

db.Family
  .remove({})
  .then(() => db.Family.collection.insertMany(familySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
