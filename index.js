var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var customTypes = require("./types");

console.log('customTypes', customTypes);

// Maps id to User object
var db = {};

var AddressType = new graphql.GraphQLObjectType({
  name: 'AddressType',
  fields: {
    street: { type: graphql.GraphQLString },
    number: { type: graphql.GraphQLInt },
    formatted: {
      type: graphql.GraphQLString,
      resolve(obj) {
        return obj.number + ' ' + obj.street
      }
    }
  }
});

// Define the User type
var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    gender: { type: graphql.GraphQLString },
    odd: { type: customTypes.Odd },
    age: { type: graphql.GraphQLString },
    url: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
    birthDate: { type: graphql.GraphQLString },
    favoriteHour: { type: graphql.GraphQLString },
    favoriteDaytime: { type: graphql.GraphQLString },
    favoriteLetter: { type: graphql.GraphQLString },
    location: { type: customTypes.GraphQLGeoPoint },
    address: { type: AddressType }
  }
});

// Define the Query type
var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: function (_, {id}) {
        return db[id];
      }
    }
  }
});

var schema = new graphql.GraphQLSchema({query: queryType});

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');