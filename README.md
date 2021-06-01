# Herkshire Bathaway - More Places To Stay Service

A "Similar Listings" component for a property rental company. This project utilized a completed front-end component and built a scalable back end that is able to handle over 2000 requests per second (RPS) locally, and about 1500 RPS when deployed to a horizontally scaled EC2 cluster load balanced via NGINX.

## Stress Test Screenshots
<img src="https://herkshirebath.s3-us-west-1.amazonaws.com/Screenshot+from+2021-05-07+16-41-20.png" height="500">

## Related Projects

  - https://github.com/6-BTDF/reservations-service
  - https://github.com/6-BTDF/ImageCarousel-Service
  - https://github.com/6-BTDF/reviews-service

## Table of Contents

- [Usage](#Usage)
  - [Create](#Adding_Related_Properties)
  - [Read](#Reading_Listings)
  - [Update](#Updating_Related_Properties)
  - [Delete](#Deleting_Related_Properties)

## Usage

> Some usage instructions

This more-places-to-stay service utilizes a RESTful API architecture to retrieve and modify database-hosted, site-critical information. Syntax and routes conform to common sense REST standards.

### Adding_Related_Properties

> POST: '/api/:id/places'

Used to add a listing to an existing listing's collection of related properties.

####Body: JSON Object
{
  bedCount (int),
  pictureURL (string),
  locationName (string),
  costPerNight (int),
  score (int),
  reviewCount (int),
  roomType (string),
  userID (int)
}

### Reading_Related_Properties

> GET: '/api/:id/places'

Used to retrieve a specific  **listing's** related properties.

####Body: JSON Object
{
  id (int),
  bedCount (int),
  pictureURL (string),
  locationName (string),
  costPerNight (int),
  score (int),
  reviewCount (int),
  roomType (string),
  userID (int)
}

Given a listing id, this call will return a listing with an array of its associated listings.

### Updating_Related_Properties

> PATCH: '/api/:id/places/'

Used to update the collection of **related properties** for a particular listing. Any updated field except listing ID

####Body: JSON Object
{
  bedCount,
  pictureURL,
  locationName,
  costPerNight,
  score,
  reviewCount,
  roomType,
  userID
}

Given a specific listing, this route will re-order it's collection of related properties.

### Deleting_Related_Properties

> DELETE: '/api/:id/places/:id'

Used to delete a **review** for a particular listing.

Given a specific listing and related property, this will delete the related property in question.

