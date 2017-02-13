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
  
  ${userSchema}
  
  ${activitySchema}
  
  ${placeSchema}  
  
  ${tagSchema}  
  
  ${photoSchema}  
  
  # the schema allows the following query:
  type Query {
    node(id: ID): Node
    nodes(id:[ID]): [Node]
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
