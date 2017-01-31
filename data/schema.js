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


  input UserInput {
    name: String
    email: Email
    password: Password
    isActive: Boolean
    visitedPlaces: [PlaceInput]
    photos: [PhotoInput]
    birthDate: Date
    website: Url
    friends: [UserInput]
  }

  # User description
  type User {
    id: Int!
    name: String
    email: Email
    password: Password
    isActive: Boolean
    visitedPlaces: [Place]
    photos: [Photo]
    birthDate: Date
    website: Url
    friends: [User]
  }
  
  
  input ActivityInput {
    title: String!
    description: String
    places: [PlaceInput]
    tags: [TagInput]
  }
  
  # Activity description
  type Activity {
    id: Int!
    title: String!
    description: String
    places: [Place]
    tags: [Tag]
  }
 
  
  input PlaceInput {
    title: String!
    description: String!
    location: [GeoPointInput]
    tags: [TagInput]
  }
  
  # Place description
  type Place {
    id: Int!
    title: String!
    description: String!
    location: [GeoPoint]
    tags: [Tag]
  }
  
  
  input TagInput {
    name: String!
  }
  
  # Tag description
  type Tag {
    id: Int!
    name: String!
  }
    
  
  input PhotoInput {
    url: String!
  }
  
  # Photo description
  type Photo {
    id: Int!
    url: String!
  }
  
  
  # the schema allows the following query:
  type Query {
    user(id: Int): User
    users: [User]
    activities: [Activity]
    photos: [Photo]
    tags: [Tag]
    places: [Place]
  }
  
  # this schema allows the following mutation:
  type Mutation {
    createUser(user: UserInput):User
    updateUser(id: ID!, user: UserInput):User
    deleteUser(id: ID!):User
    
    createActivity(activity: ActivityInput):Activity 
    updateActivity(id: ID!, activity: ActivityInput):Activity
    deleteActivity(id: ID!):Activity
     
    createPlace(place: PlaceInput):Place
    updatePlace(id: ID!, place: PlaceInput):Place
    deletePlace(id: ID!):Place
    
    createTag(tag: TagInput):Tag
    updateTag(id: ID!, tag: TagInput):Tag
    deleteTag(id: ID!):Tag
    
    createPhoto(photo: PhotoInput):Photo
    updatePhoto(id: ID!, photo: PhotoInput):Photo
    deletePhoto(id: ID!):Photo
  }
  
  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = schema;
