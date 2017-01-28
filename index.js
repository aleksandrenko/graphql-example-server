var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var customTypes = require("./types");

// Maps id to User object
var db = {
  activities: [],
  users: [],
  places: [],
  photos: [],
  tags: []
};

var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLID },
    // visitedPlaces: { type: placeType },
    // photos: { type: photoType }
  }
});

var tagType = new graphql.GraphQLObjectType({
  name: 'Tag',
  fields: {
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    creator: { type: userType }
  }
});

var photoType = new graphql.GraphQLObjectType({
  name: 'Photo',
  fields: {
    id: { type: graphql.GraphQLID },
    source: { type: graphql.GraphQLString },
    tags: { type: tagType }
  }
});

var activityType = new graphql.GraphQLObjectType({
  name: 'Activity',
  fields: {
    id: { type: graphql.GraphQLID },
    title: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    photos: { type: photoType },
    slug: {
      type: graphql.GraphQLString,
      resolve(obj) {
        return obj.title.split(' ').join('-');
      }
    },
    tags: { type: tagType }
  }
});

var placeType = new graphql.GraphQLObjectType({
  name: 'Place',
  fields: {
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    location: { type: graphql.GraphQLString },
    tags: { type: tagType },
    photos: { type: photoType }
  }
});

// Define the User type
var exampleType = new graphql.GraphQLObjectType({
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
    location: { type: customTypes.GraphQLGeoPoint }
  }
});


// Define the Query type
var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      // args: {
      //   id: { type: graphql.GraphQLString }
      // },
      resolve: (id) => db.users[0]
    },
    users: {
      type: userType,
      resolve: () => db.users
    },
    tags: {
      type: tagType,
      resolve: () => db.tags
    },
    places: {
      type: placeType,
      resolve: () => db.places
    },
    activities: {
      type: activityType,
      resolve: () => db.activities
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