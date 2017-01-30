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
    deleteUser(_, { id }) {
      return true;
    },
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
