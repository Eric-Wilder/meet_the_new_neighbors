const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/familyList"
);

const familySeed = [
  {
    family: "Bat",
    email: "batman@justice.com",
    address: "52 Gotham Drive",
    numAdults: 2,
    adultsName: "Bruce Wayne and Alfred Pennyworth",
    numKids: 4,
    kidsName: "Duke Thomas, Dick Grayson, Cassandra Cain, Damian Wayne",
    numPets: 1,
    petsName: "Wolf",
    likes: "Beating Up Jokers",
    photo: "https://pm1.narvii.com/7170/71b1223d4a971d5b804a31ecb5c850b02851d96br1-2048-1584v2_uhq.jpg",
    date: new Date(Date.now())
  },
  {
  family: "Kent",
  email: "superman@justice.com",
  address: "88 Kyrpton Ave",
  numAdults: 2,
  adultsName: "Clark Kent and Lois Lane Kent",
  numKids: 1,
  kidsName: "Jon Kent",
  numPets: 1,
  petsName: "Kyrpto",
  likes: "Flying Thru The Sky",
  photo: "https://i.pinimg.com/originals/93/b4/fd/93b4fd0381379b78fcba512c28231468.png",
  date: new Date(Date.now())
},
{
  family: "Avengers",
  email: "avengers@justice.com",
  address: "11 Shield Street",
  numAdults: 2,
  adultsName: "Captain America and Black Widow",
  numKids: 3,
  kidsName: "Thor, Hulk, She-Hulk",
  numPets: 1,
  petsName: "Loki",
  likes: "Finding Stones",
  photo: "https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/marvelthumb2.jpg",
  date: new Date(Date.now())
},
{
  family: "WandaVision",
  email: "wandavision@justice.com",
  address: "125 Westview Avenue",
  numAdults: 2,
  adultsName: "Vision and Wanda",
  numKids: 2,
  kidsName: "Thomas and William",
  numPets: 1,
  petsName: "Dog - Sparky",
  likes: "Magic, Telepathy",
  photo: "https://s.yimg.com/ny/api/res/1.2/9WUwoiRphVHw4AbUrnq6Tg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY1MC4zMjI1ODA2NDUxNjEz/https://media.zenfs.com/en-US/tvline.com/e8e2bf9dcb0d28b0de180f9bbbeb7d94",
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
