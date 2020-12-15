const express = require('express');
const listingController = require('../../db/controllers/listing.js');

// create a route handler
const router = express.Router();

router.route('/api/:id/morePlaces')
  .get((req, res) => {
    const { id } = req.params;
    listingController.getSimilarListings(id, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  });

router.route('/api/morePlaces')
  .post((req, res) => {
    listingController.makeListing(req.body, (err, data) => {
      console.log(req);
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        console.log(data);
        res.status(201).json(data);
      }
    });
  });

router.route('/api/:id/places/:id')
  .delete((req, res) => {
    const { id } = req.params;
    listingController.delete(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    });
  })
  .put((req, res) => {
    const { id } = req.params;
    listingController.update(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    });
  });

module.exports = router;
