/* eslint-disable */
const express = require('express');
require('newrelic');
const listingRouter = require('./routers/listing.js');
// const listingController = require('../db/controllers/listing.js');
// const morgan = require('morgan');

const app = express();

// app.use(morgan('dev'));

app.use(express.json());

app.use(listingRouter); // if using middleware to listen to requests, do not put the path to listen to in app.use. That will be handled by the middleware

app.use('/:id/', express.static('public/dist'));


module.exports = app;
