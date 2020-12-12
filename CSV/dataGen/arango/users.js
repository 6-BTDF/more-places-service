/* eslint-disable no-plusplus */
const faker = require('faker');

// generate random userName
const makeUserName = () => faker.internet.userName();
// generate random fullName
const makeFullName = () => `${faker.name.firstName()} ${faker.name.lastName()}`;
// generate random email
const makeEmail = () => faker.internet.email();

const userCreator = (id) => {
  const result = {
    _key: JSON.stringify(id),
    userName: makeUserName(),
    email: makeEmail(),
    fullName: makeFullName(),
  };

  return `${JSON.stringify(result)}\n`;
};

module.exports = userCreator;
