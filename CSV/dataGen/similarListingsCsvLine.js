const genRandomNum = (min, max) => Math.floor((Math.random() * (max - min)) + min);

// generate similar lsiting ID
const simID = () => genRandomNum(1, 12);
// generate random listingID
const listingID = () => genRandomNum(1, 10000000);
// generate random listingID for similarity listing per similar listing
const relatedID = () => genRandomNum(1, 10000000);
// generate weight for similar listing
const weight = () => genRandomNum(1, 5);

const writeSimilarListingsCSVLine = (id) => `${simID},${listingID},${relatedID},${weight}\n`;

module.exports = writeSimilarListingsCSVLine;
