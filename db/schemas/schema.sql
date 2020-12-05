DROP SCHEMA IF EXISTS morePlaces CASCADE;

CREATE SCHEMA morePlaces;

  CREATE TABLE morePlaces.listings (
    id SERIAL PRIMARY KEY,
    bedCount INTEGER NOT NULL,
    CHECK (bedcount >= 0),
    CHECK (bedcount <= 16),
    pictureURL VARCHAR(100) NOT NULL,
    listingName VARCHAR(50) NOT NULL,
    locationName VARCHAR(50) NOT NULL,
    costPerNight NUMERIC(4) NOT NULL,
    stars DECIMAL DEFAULT76 NULL,
    reviewCount NUMERIC(4) DEFAULT 0,
    roomType VARCHAR(50) NOT NULL,
    userID INTEGER NOT NULL,0
  )

  CREATE TABLE morePlaces.similarListings (
    id SERIAL PRIMARY KEY NOT NULL,
    listingID references morePlaces.listings(id) NOT NULL,
    relatedID references morePlaces.listings(id) NOT NULL,
    weight INTEGER NOT NULL,
  )

  CREATE TABLE morePlaces.users (
    id INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
  )