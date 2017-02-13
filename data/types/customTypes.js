const schema = `

  # Date scalar description
  scalar Date
  
  # Email scalar description
  scalar Email
  
  # Url scalar description
  scalar Url
  
  # Password scalar description
  scalar Password
  
  input GeoPointInput {
    lat: Float!
    lng: Float!
  }
  
  # GeoPoint description
  type GeoPoint {
    lat: Float!
    lng: Float!
  }
  
`;

module.exports = schema;
