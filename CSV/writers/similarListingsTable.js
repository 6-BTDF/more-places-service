/* eslint-disable no-plusplus */
const fs = require('fs');
const writeSimilarListingsLine = require('../dataGen/similarListingsCsvLine.js');

function writeTenMillionTimes(writer, encoding, cb) {
  let i = 1000;
  let id = 0;
  // eslint-disable-next-line no-use-before-define
  write();
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      const data = writeSimilarListingsLine(id);
      if (i === 0) {
        // Last time!
        writer.write(data, encoding, cb);
      } else {
        // see if we should continue, or wait.
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.cone('drain', write);
    }
  }
}

const writeSimilarListingFile = fs.createWriteStream('./similarListings.csv');

writeTenMillionTimes(writeSimilarListingFile, 'utf-8', () => {
  writeSimilarListingFile.end();
});
