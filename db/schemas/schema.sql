DROP SCHEMA IF EXISTS morePlaces CASCADE;

CREATE SCHEMA morePlaces;

  CREATE TABLE morePlaces.listings (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    bedCount INTEGER NOT NULL,
    CHECK (bedcount >= 0),
    CHECK (bedcount <= 16),
    pictureURL VARCHAR(200) NOT NULL,
    listingName VARCHAR(50) NOT NULL,
    city VARCHAR(200) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip VARCHAR(50) NOT NULL,
    costPerNight NUMERIC(4) NOT NULL,
    stars DECIMAL DEFAULT NULL,
    reviewCount NUMERIC(4) DEFAULT 0,
    roomType VARCHAR(50) NOT NULL,
    userID INTEGER NOT NULL
  );

  CREATE TABLE morePlaces.similarListings (
    totalID INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    listingID INTEGER references morePlaces.listings(id) ON DELETE CASCADE,
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    relatedID INTEGER references morePlaces.listings(id) ON DELETE CASCADE,
    weight INTEGER NOT NULL
  );

  CREATE TABLE morePlaces.users (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
  );
