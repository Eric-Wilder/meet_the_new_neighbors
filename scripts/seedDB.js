const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/familyList"
);

const familySeed = [
  {
    family: "Bat Residents",
    address: "52 Gotham Drive",
    numAdults: 2,
    adultsName: "Bruce Wayne and Alfred Pennyworth",
    numKids: 4,
    kidsName: "Duke Thomas, Dick Grayson, Cassandra Cain, Damian Wayne",
    numPets: 1,
    petsName: "Wolf",
    likes: "Beating Up Jokers",
    // photo: url("/hero2.jpg"),
    date: new Date(Date.now())
  },
  {
  family: "Kent Residents",
  address: "88 Kyrpton Ave",
  numAdults: 2,
  adultsName: "Clark Kent and Lois Lane Kent",
  numKids: 1,
  kidsName: "Jon Kent",
  numPets: 1,
  petsName: "Kyrpto",
  likes: "Flying Thru The Sky",
  // photo: url("/hero2.jpg"),
  date: new Date(Date.now())
},
{
  family: "Avengers Residents",
  address: "11 Shield Street",
  numAdults: 2,
  adultsName: "Captain America and Black Widow",
  numKids: 3,
  kidsName: "Thor, Hulk, She-Hulk",
  numPets: 1,
  petsName: "Loki",
  likes: "Finding Stones",
  // photo: url("/hero2.jpg"),
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
