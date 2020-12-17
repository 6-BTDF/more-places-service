const { Database, aql } = require('arangojs');

const db = new Database({
  agentOptions: {
    maxSockets: 24,
  },
  loadBalancingStrategy: 'ROUND_ROBIN',
  auth: {
    password: 'gangogango001',
    username: 'root',
  },
  QueryOptions: {
    stream: true,
  },
});

db.useDatabase('morePlaces');

const listings = db.collection('listings');

const getSimilarListings = async (listingId, callback) => {
  const result = [];
  try {
    const similars = await db.query(aql`
      FOR l IN ${listings}
        FILTER l._key == ${listingId}
        FOR s IN l.similarListings
          FOR k in ${listings}
            FILTER s.listingId == k._key
            RETURN k
    `);
    // eslint-disable-next-line no-restricted-syntax
    for await (const sim of similars) {
      result.push(sim);
    }
    callback(null, result);
  } catch (err) {
    console.log(err);
    callback(err);
  }
};

const makeListing = async (listing, callback) => {
  try {
    await db.query(aql`
      INSERT ${listing} INTO listings
    `);
    callback(null, listing);
  } catch (err) {
    console.log(err);
    callback(err);
  }
};
module.exports = {
  getSimilarListings,
  makeListing,
};
