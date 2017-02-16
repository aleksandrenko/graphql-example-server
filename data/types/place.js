const types = `

  # Place description
  type Place implements Node {
    id: ID!
    title: String!
    description: String!
    location: [GeoPoint]
    tags: TagsConnection
  }
  
  input PlaceInput {
    title: String!
    description: String!
    location: [GeoPointInput]
  }
  
  type VisitedPlaceEdge implements Edge {
    id: ID!
    node: Place
    visitedDate: Date
  }

  type VisitedPlacesConnection implements Connection {
    nodes: [Node]
    edges: [VisitedPlaceEdge]
    pageInfo: PageInfo
    totalCount: Int!
  }
  
  type PlaceEdge implements Edge {
    id: ID!
    node: Place
  }
  
  type PlacesConnection implements Connection {
    nodes: [Node]
    edges: [PlaceEdge]
    pageInfo: PageInfo
    totalCount: Int!
  }
  
`;

const mutations = `
  createPlace(place: PlaceInput):Place
  updatePlace(id: ID!, place: PlaceInput):Place
  deletePlace(id: ID!):Place
  
  addTag():TagConnection
  updateTag():TagConnection
  removeTag():TagConnection
`;

module.exports = {
  types,
  mutations
};
