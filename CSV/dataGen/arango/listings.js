/* eslint-disable no-plusplus */
const faker = require('faker');
const listingPictures = require('../../listingsPictures.js');
const locations = require('../../../locations.js');

const roomTypes = ['Entire Place', 'Private Room', 'Shared Room'];

const genRandomNum = (min, max) => Math.floor((Math.random() * (max - min)) + min);

// generate random bedCount
const bedCount = () => genRandomNum(1, 16);
// generate random pictureURL
const pictureURL = () => listingPictures[genRandomNum(0, 83)];
// generate random location
const locationObj = () => locations[Math.floor(Math.random() * locations.length)];
// generate random listingName
const listingName = () => faker.lorem.words();
// generate random costPerNight
const costPerNight = () => genRandomNum(50, 500);
// generate random star amount
const stars = () => (4 + Math.random()).toFixed(1);
// generate random number of reviews
const reviewCount = () => genRandomNum(10, 1000);
// generate random room catagory
const roomType = () => roomTypes[genRandomNum(0, 2)];
// generate userID
const userID = () => genRandomNum(1, 5000000);
// generate random lisstingID
const makeListingId = () => genRandomNum(1, 10000000);
// generate random weight for similarListings
const weight = () => genRandomNum(1, 6);

const createSim = (id) => (
  {
    listingId: makeListingId(),
    weight: weight(),
  }
);

const similarListings = () => {
  let num = 12;
  const result = {};
  let idCount = 1;
  while (num > 0) {
    result[idCount] = (createSim(idCount));
    idCount++;
    num--;
  }
  return result;
};

const fullListingCreator = (id) => {
  const fullLocation = locationObj();
  const { city } = fullLocation;
  const { state } = fullLocation;
  const { zip } = fullLocation;

  const result = {
    id,
    listingName: listingName(),
    pictureURL: pictureURL(),
    city,
    state,
    zip,
    stars: stars(),
    reviewCount: reviewCount(),
    roomType: roomType(),
    bedCount: bedCount(),
    costPerNight: costPerNight(),
    user: {
      id: userID(),
      name: faker.internet.userName(),
    },
    similarListings: similarListings(),
  };

  return `${JSON.stringify(result)}\n`;
};

module.exports = fullListingCreator;
