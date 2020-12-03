# Herkshire Bathaway Timeshare - More Places To Stay Service

> Project description

## Related Projects

  - https://github.com/6-BTDF/reservations-service
  - https://github.com/6-BTDF/ImageCarousel-Service
  - https://github.com/6-BTDF/reviews-service

## Table of Contents

- [Usage](#Usage)
  - [Create](#Adding_Related_Properties)
  - [Read](#Reading_Listings)
  - [Update](#Updating_Reviews)
  - [Delete](#Deleting_Reviews)

## Usage

> Some usage instructions

This more-places-to-stay service utilizes a RESTful API architecture to retrieve and modify database-hosted, site-critical information. Syntax and routes conform to common sense REST standards.

### Adding_Related_Properties

> POST: '/api/:id/places'

Used to add a listing to an existing listing's collection of related properties.

Given a listing id and the related listing in the POST body, this path will add a listing related by geolocation to a particular listing's collection of related properties.

### Reading_Related_Properties

> GET: '/api/:id/places'

Used to retrieve a specific  **listing's** related properties.

Given a listing id, this call will return a listing with an array of its associated listings.

### Updating_Related_Properties

> PUT: '/api/:id/places/'

Used to update the collection of **related properties** for a particular listing.

Given a specific listing, this route will re-order it's collection of related properties.

### Deleting_Related_Properties

> DELETE: '/api/:id/places/:id'

Used to delete a **review** for a particular listing.

Given a specific listing and related property, this will delete the related property in question.

