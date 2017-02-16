const types = `

  # Photo description
  type Photo implements Node {
    id: ID!
    url: String!
    tags: TagsConnection
  }
  
  input PhotoInput {
    url: String!
  }
  
  type PhotoEdge implements Edge {
    id: ID!
    node: Tag
  }
  
  type PhotosConnection implements Connection {
    nodes: [Node]
    edges: [PhotoEdge]
    pageInfo: PageInfo
    totalCount: Int!
  }
  
`;

const mutations = `
  createPhoto(photo: PhotoInput):Photo
  updatePhoto(id: ID!, photo: PhotoInput):Photo
  deletePhoto(id: ID!):Photo
`;

module.exports = {
  types,
  mutations
};
