const schema = `

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

module.exports = schema;
