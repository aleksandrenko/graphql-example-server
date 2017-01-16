var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  enum Episode { NEWHOPE, EMPIRE, JEDI }
  
  type Person {
   id: ID!
   name: String
   homepage: String
   friends: [Person]
   interests: [Interest]
  }
  
  type Activity {
    id: ID!
    name: String!
    location: Location
    type: Interest
  }
  
  type Interest {
    id: ID!
    name: String!
  }
  
  type Photo {
    id: ID!
    name: String!
    url: String!
    location: Location
  }
  
  type Location {
    id: ID!
    name: String
    latlng: String!
  }
  
  type Query {
    users: [Person]
    activities: [Activity]
    interests: [Interest]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  users: () => [{
    id: 0,
    name: 'John Smith',
    homepage: 'http://google.com',
    friends: [],
    interests: []
  },
  {
    id: 1,
    name: 'Nikolay Aleksandrenko',
    homepage: 'http://aleksandrenko.com',
    friends: [],
    interests: []
  }],
  activities: () => [],
  interests: () => []
};

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');