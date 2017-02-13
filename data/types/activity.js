const schema = `
  
  # Activity description
  type Activity implements Node {
    id: ID!
    title: String!
    description: String
    places: PlacesConnection
    tags: TagsConnection
  }
  
  input ActivityInput {
    title: String!
    description: String
  }
  
`;

module.exports = schema;
