/* eslint-disable no-plusplus */
const fs = require('fs');
const writeUsersLine = require('../dataGen/userCsvLine.js');

function writeFiveMillionTimes(writer, encoding, cb) {
  let i = 5000000;
  let id = 0;
  // eslint-disable-next-line no-use-before-define
  write();
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      const data = writeUsersLine(id);
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
      writer.once('drain', write);
    }
  }
}

const writeUsersFile = fs.createWriteStream('/home/mcc4b3/Desktop/131/SDC/more-places-service/CSV/users.csv');
const colNames = 'userID,name\n';
writeUsersFile.write(colNames);

writeFiveMillionTimes(writeUsersFile, 'utf-8', () => {
  writeUsersFile.end();
});
