const types = `

  # User description
  type User implements Node {
    id: ID!
    name: String
    email: Email
    password: Password
    isActive: Boolean
    birthDate: Date
    website: Url    
    photos: PhotosConnection
    friends: FriendsConnection
    visitedPlaces: VisitedPlacesConnection
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

const mutations = `
  createUser(user: UserInput):User
  updateUser(id: ID, user: UserInput):User
  deleteUser(id: ID):User
  
  addUserFriend(userId: ID!, friendId: ID!):FriendsConnection
`;

module.exports = {
  types,
  mutations
};
