const listingSchema = {
  rule: {
    type: 'object',
    properties: {
      id: { type: 'number'},
      pictureURL: { type: 'string' },
      locationName: { type: 'string' },
      stars: { type: 'number' },
      reviewCount: { type: 'number' },
      roomType: { type: 'string' },
      bedCount: { type: 'number' },
      costPerNight: { type: 'number' },
      user: {
        type: 'object',
        id: { type: 'number'},
        name: { type: 'string' },
      }
      similarListings: { type: 'array',ids: {
        {type: 'number'}
      },
        score: { type: number}},
    },
    required: ['id', 'pictureURL', 'locationName', 'liked', 'score', 'reviewCount', 'roomType', 'bedCount', 'costPerNight', 'similarListings']
  },
  level: "moderate",
  message: "The document does not contain the correct information"
}

listingCollection = db.createCollection(
  name = 'Listings',
  schema = listingSchema
)
