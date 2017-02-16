var graphql = require('graphql');

// Maps id to User object
var db = {
  activities: [],
  users: [],
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
    createUser(userInput) {},
    updateUser(id, userInput) {},
    deleteUser(id) {},

    addFriend(userId, friendId) {},
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
