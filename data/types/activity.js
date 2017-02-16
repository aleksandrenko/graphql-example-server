const types = `
  
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

const mutations = `
    createActivity(activity: ActivityInput):Activity 
    updateActivity(id: ID!, activity: ActivityInput):Activity
    deleteActivity(id: ID!):Activity
    
    addTag():TagConnection
    updateTag():TagConnection
    removeTag():TagConnection
    
    addPlace():PlaceConnection
    updatePlace():PlaceConnection
    removePlace():PlaceConnection
`;

module.exports = {
  types,
  mutations
};
