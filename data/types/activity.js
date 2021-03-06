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
    
    addActivityTag(activityId: ID!, tagId: ID!):TagsConnection
    removeActivityTag(activityId: ID!, tagId: ID!):TagsConnection
    
    addActivityPlace(activityId: ID!, placeId: ID!):PlacesConnection
    removeActivityPlace(activityId: ID!, placeId: ID!):PlacesConnection
`;

module.exports = {
  types,
  mutations
};
