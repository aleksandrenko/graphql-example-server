const userSchema = require('./types/user');
const activitySchema = require('./types/activity');
const placeSchema = require('./types/place');
const tagSchema = require('./types/tag');
const photoSchema = require('./types/photo');

const customTypes = require('./types/customTypes');
const systemSchema = require('./types/system');

const schema = `
  ${systemSchema}

  ${customTypes}
  
  ${userSchema.types}
  
  ${activitySchema.types}
  
  ${placeSchema.types}  
  
  ${tagSchema.types}  
  
  ${photoSchema.types}  
  
  # the schema allows the following query:
  type Query {
    nodes(id:[ID]): [Node]
    users(id: [ID]): [User]
    activities(id: [ID]): [Activity]
    photos(id: [ID]): [Photo]
    tags(id: [ID]): [Tag]
    places(id: [ID]): [Place]
  }
  
  # this schema allows the following mutation:
  type Mutation {
    ${userSchema.mutations}
    ${activitySchema.mutations}
    ${placeSchema.mutations}
  }
  
  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = schema;
