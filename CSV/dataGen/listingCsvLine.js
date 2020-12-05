/* eslint-disable no-plusplus */
const faker = require('faker');
const listingPictures = require('../listingsPictures.js');

const roomTypes = ['Entire Place', 'Priavate Room', 'Shared Room'];

const genRandomNum = (min, max) => Math.floor((Math.random() * (max - min)) + min);

// generate random bedCount
const bedCount = () => genRandomNum(1, 16);
// generate random pictureURL
const pictureURL = () => listingPictures[genRandomNum(0, 83)];
// generate random locationName
const locationName = () => faker.address.streetName();
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
const userID = () => genRandomNum(0, 10000000);

const writeListingCSVLine = (id) => `${id},${bedCount()},${pictureURL()},${listingName()},${locationName()},${costPerNight()},${stars()},${reviewCount()},${roomType()},${userID()}\n`;

module.exports = writeListingCSVLine;
