var graphql = require('graphql');

const resolverMap = {
  Query: {
    users() {
      return [{
        id: 2531,
        name: 'Stephen',
        visitedPlaces: [],
        photos: [],
        birthDate: 124125
      }];
    },
  },
  Mutation: {
    createUser(user) {},
    updateUser(id, user) {},
    deleteUser(id) {},

    createActivity(activity) {},
    updateActivity(id, activity) {},
    deleteActivity(id) {},

    createPlace(place) {},
    updatePlace(id, place) {},
    deletePlace(id) {},

    createTag(tag) {},
    updateTag(id, tag) {},
    deleteTag(id) {},

    createPhoto(photo) {},
    updatePhoto(id, photo) {},
    deletePhoto(id) {}
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
  },

  // Author: {
  //   posts(author) {
  //     return filter(posts, { authorId: author.id });
  //   },
  // },
  // Post: {
  //   author(post) {
  //     return find(authors, { id: post.authorId });
  //   },
  // },
};

module.exports = resolverMap;
