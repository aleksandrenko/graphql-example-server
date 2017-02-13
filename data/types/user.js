const schema = `

  # User description
  type User implements Node {
    id: ID!
    name: String
    email: Email
    password: Password
    isActive: Boolean
    visitedPlaces: VisitedPlacesConnection
    photos: PhotosConnection
    birthDate: Date
    website: Url
    friends: FriendsConnection
  }
  
  input UserInput {
    name: String
    email: Email
    password: Password
    isActive: Boolean
    birthDate: Date
    website: Url
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
  
`;

module.exports = schema;
