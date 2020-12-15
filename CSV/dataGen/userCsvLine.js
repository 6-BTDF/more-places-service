const faker = require('faker');

// const genRandomNum = (min, max) => Math.floor((Math.random() * (max - min)) + min);

// generate userID
// const userID = () => genRandomNum(1, 5000000);
// generate userName
const name = () => faker.internet.userName();

const writeUserLineCsv = (id) => `${id},${name()}\n`;

module.exports = writeUserLineCsv;
