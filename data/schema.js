const schema = `
  scalar Date

  type User {
    id: Int
    name: String
    visitedPlaces: [Place]
    photos: [Photo]
    birthDate: Date
  }
  
  type Activity {
    id: Int
    title: String
    description: String
    places: [Place]
    tags: [Tag]
  }
  
  type Place {
    id: Int
    title: String
    description: String
    places: [Place]
    tags: [Tag]
  }
  
  type Tag {
    id: Int
    name: String!
  }
  
  type Photo {
    id: Int
    url: String
  }
  
  # the schema allows the following query:
  type Query {
    user: User
    users: [User]
    activities: [Activity]
    photos: [Photo]
    tags: [Tag]
    places: [User]
  }
  
  # this schema allows the following mutation:
  type Mutation {
    deleteUser (id: Int!): User
  }
  
  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = schema;