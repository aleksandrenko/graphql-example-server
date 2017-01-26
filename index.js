var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var customTypes = require("./types");

// Maps id to User object
var db = {};


var commentTypes = new graphql.GraphQLObjectType({
  name: 'Comment',
  fields: {
    id: { type: graphql.GraphQLID }
  }
});

var articleTypes = new graphql.GraphQLObjectType({
  name: 'Article',
  fields: {
    id: { type: graphql.GraphQLID },
    comments: { type: commentTypes }
  }
});

// Define the User type
var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    gender: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
    url: { type: customTypes.GraphQLURL },
    email: { type: customTypes.GraphQLEmail },
    password: { type: customTypes.GraphQLPassword },
    birthDate: { type: customTypes.GraphQLDate },
    favoriteHour: { type: customTypes.GraphQLTime },
    favoriteDaytime: { type: customTypes.GraphQLDateTime },
    favoriteLetter: { type: customTypes.GraphQLString },
    location: { type: customTypes.GraphQLGeoPoint },
    likesArticles: { type: articleTypes },
    likesComments: { type: commentTypes }
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
    },
    users: {
      type: userType,
      resolve: function () { return db; }
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