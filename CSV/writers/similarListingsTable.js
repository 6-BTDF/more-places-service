/* eslint-disable no-plusplus */
const fs = require('fs');
const writeSimilarListingsLine = require('../dataGen/similarListingsCsvLine.js');

function writeTenMillionTimes(writer, encoding, cb) {
  let i = 10000000;
  let id = 0;
  // eslint-disable-next-line no-use-before-define
  write();
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      for (let j = 1; j <= 12; j++) {
        const data = writeSimilarListingsLine(id, j);
        if (i === 0) {
          // Last time!
          writer.write(data, encoding, cb);
        } else {
          // see if we should continue, or wait.
          // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}

const writeSimilarListingsFile = fs.createWriteStream('/home/mcc4b3/Desktop/131/SDC/more-places-service/CSV/similarListings.csv');
const colNames = 'listingID,simIDNum,relatedToID,weight\n';
writeSimilarListingsFile.write(colNames);

writeTenMillionTimes(writeSimilarListingsFile, 'utf-8', () => {
  writeSimilarListingsFile.end();
});
