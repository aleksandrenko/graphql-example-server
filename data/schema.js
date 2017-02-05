const schema = `
  interface Node {
    id: ID!
  }
  
  interface Edge {
    id: ID!
    node: Node
  }

  interface Connection {
    nodes: [Node]
    edges: [Edge]
    pageInfo: PageInfo
    totalCount: Int!
  }

  # page info object - an object to hold the paging and cursors information. github like
  type PageInfo {
    endCursor: String
    hasNextPage: String
    hasPreviousPage: String
    startCursor: String
  }


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
  type User implements Node {
    id: ID!
    name: String
    email: Email
    password: Password
    isActive: Boolean
    visitedPlaces: [Place]
    photos: [Photo]
    birthDate: Date
    website: Url
    FriendsConnection: FriendsConnection
  }
  
  type FriendEdge implements Edge {
    id: ID!
    node: User,
    since: Date!
  }
  
  # Fiends
  type FriendsConnection implements Connection {
    nodes: [User]
    edges: [FriendEdge]
    pageInfo: PageInfo
    totalCount: Int!
  }
  
  
  type TagsConnection implements Connection  {
    nodes: [Node]
    edges: [TagEdge]
    pageInfo: PageInfo
    totalCount: Int!
  }
  
  input ActivityInput {
    title: String!
    description: String
    places: [PlaceInput]
    tags: [TagInput]
  }
  
  # Activity description
  type Activity implements Node {
    id: ID!
    title: String!
    description: String
    places: [Place]
    tagsConnection: TagsConnection
  }
 
  
  input PlaceInput {
    title: String!
    description: String!
    location: [GeoPointInput]
    tags: [TagInput]
  }
  
  # Place description
  type Place implements Node {
    id: ID!
    title: String!
    description: String!
    location: [GeoPoint]
    TagsConnection: TagsConnection
  }
  
  
  input TagInput {
    name: String!
  }
  
  type TagEdge implements Edge {
    id: ID!
    node: Tag
  }
  
  # Tag description
  type Tag implements Node {
    id: ID!
    name: String!
  }
    
  
  input PhotoInput {
    url: String!
  }
  
  # Photo description
  type Photo implements Node {
    id: ID!
    url: String!
  }
  
  
  # the schema allows the following query:
  type Query {
    user(id: ID): User
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
