// const { Database } = require('arangojs');

// make new database instance to connect to
// const db = new Database();

const app = require('./app.js');

const PORT = 3004;

// connect to the listings database
// db.useDatabase('morePlaces');

app.listen(PORT, () => {
  console.log(`more places module listening on http://localhost/${PORT}`);
});
