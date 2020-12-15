const zipcodes = require('zipcodes');
const fs = require('fs');

const locationCreator = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(zipcodes.random());
  }
  return result;
};

const dataSet = locationCreator(10000);

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

storeData(dataSet, '/home/mcc4b3/Desktop/131/SDC/more-places-service/locations.js');
