const types = `

  # Tag description
  type Tag implements Node {
    id: ID!
    name: String!
  }
  
  input TagInput {
    name: String!
  }
  
  type TagEdge implements Edge {
    id: ID!
    node: Tag
  }
  
  type TagsConnection implements Connection  {
    nodes: [Node]
    edges: [TagEdge]
    pageInfo: PageInfo
    totalCount: Int!
  }
  
`;

const mutations = `
  createTag(tag: TagInput):Tag
  updateTag(id: ID!, tag: TagInput):Tag
  deleteTag(id: ID!):Tag
`;

module.exports = {
  types,
  mutations
};
