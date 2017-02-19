var graphql = require('graphql');

// Maps id to User object
var db = {
  activities: [],
  users: [
    {
      id: Date.now(),
      name: 'Default Name',
      email: 'default@gmail.com',
      password: '537272362',
      isActive: true,
      birthDate: Date.now(),
      website: 'http://www.site.com',
      photos: [],
      friends: [],
      visitedPlaces: []
    }
  ],
  places: [],
  photos: [],
  tags: []
};

const resolverMap = {
  Query: {
    users() { return db.users; },
    activities() { return db.activities; },
    photos() { return db.photos; },
    tags() { return db.tags; },
    places() { return db.places; }
  },

  Mutation: {
    createUser(obj, args, context, info) {

      //http://dev.apollodata.com/tools/graphql-tools/resolvers.html
      //obj: The object that contains the result returned from the resolver on the parent field, or, in the case of a top-level Query field, the rootValue passed from the server configuration. This argument enables the nested nature of GraphQL queries.
      //args: An object with the arguments passed into the field in the query.
      //context: This is an object shared by all resolvers in a particular query, and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be taken into account when resolving the query. If you’re using Apollo Server, read about how to set the context in the setup documentation.
      //info: This argument should only be used in advanced cases, but it contains information about the execution state of the query, including the field name, path to the field from the root, and more. It’s only documented in the GraphQL.js source code.

      let inputUser = args.user;
      let newUser = {
        id: Date.now(),
        name: inputUser.name || '',
        email: inputUser.email || '',
        password: inputUser.password || '',
        isActive: inputUser.isActive || '',
        birthDate: inputUser.birthDate || '',
        website: inputUser.website || '',
        photos: [],
        friends: [],
        visitedPlaces: []
      };

      db.users.push(newUser);

      return newUser;
    },
    updateUser(obj, args, context, info) {
      return db.users[0];
    },
    deleteUser(obj, args, context, info) {
      return db.users[0];
    },
    addUserFriend(obj, args, context, info) {
      return {
        nodes: [],
        edges: [],
        pageInfo: {},
        totalCount: 1
      };
    },
    deleteUser(obj, args, context, info) {
      return {}
    },

    createPlace(obj, args, context, info) { return {} }, //(place: PlaceInput):Place
    updatePlace(obj, args, context, info) { return {} }, //(id: ID!, place: PlaceInput):Place
    deletePlace(obj, args, context, info) { return {} }, //(id: ID!):Place

    addPlaceTag(obj, args, context, info) { return {} }, //(placeId: ID!, tagId: ID!):TagsConnection
    removePlaceTag(obj, args, context, info) { return {} }, //(placeId: ID!, tagId: ID!):TagsConnection

    createActivity(obj, args, context, info) { return {} }, //(activity: ActivityInput):Activity
    updateActivity(obj, args, context, info) { return {} }, //(id: ID!, activity: ActivityInput):Activity
    deleteActivity(obj, args, context, info) { return {} }, //(id: ID!):Activity

    addActivityTag(obj, args, context, info) { return {} }, //(activityId: ID!, tagId: ID!):TagsConnection
    removeActivityTag(obj, args, context, info) { return {} }, //(activityId: ID!, tagId: ID!):TagsConnection

    addActivityPlace(obj, args, context, info) { return {} }, //(activityId: ID!, placeId: ID!):PlacesConnection
    removeActivityPlace(obj, args, context, info) { return {} }, //(activityId: ID!, placeId: ID!):PlacesConnection

    createTag(obj, args, context, info) { return {} }, //(tag: TagInput):Tag
    updateTag(obj, args, context, info) { return {} }, //(id: ID!, tag: TagInput):Tag
    deleteTag(obj, args, context, info) { return {} }, //(id: ID!):Tag

    createPhoto(obj, args, context, info) { return {} }, //(photo: PhotoInput):Photo
    updatePhoto(obj, args, context, info) { return {} }, //(id: ID!, photo: PhotoInput):Photo
    deletePhoto(obj, args, context, info) { return {} }, //(id: ID!):Photo
  },

  Date: {
    __parseValue(value) {
      return new Date(value); // value from the client
    },
    __serialize(value) {
      return value; // value sent to the client
    },
    __parseLiteral(ast) {
      return ast.toString();
    }
  },
  Email: {
    __parseValue(value) {
      var formatRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!formatRegex.test(value)) {
        throw new graphql.GraphQLError('Email Validation error.');
      }

      return value;
    },
    __serialize(value) {
      return value;
    },
    __parseLiteral(ast) {
      return value;
    }
  },
  Password: {
    __parseValue(value) {
      return value;
    },
    __serialize(value) {
      return value;
    },
    __parseLiteral(ast) {
      return value;
    }
  },
  Url: {
    __parseValue(value) {
      return value;
    },
    __serialize(value) {
      return value;
    },
    __parseLiteral(ast) {
      return value;
    }
  },
  GeoPoint: {
    __parseValue(value) {
      return value;
    },
    __serialize(value) {
      return value;
    },
    __parseLiteral(ast) {
      return value;
    }
  }
};

module.exports = resolverMap;
