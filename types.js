var graphql = require('graphql');


// Example http://graphql.org/graphql-js/type/#graphqlscalartype
/*
var OddType = new GraphQLScalarType({
  name: 'Odd',
  serialize: oddValue,
  parseValue: oddValue,
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return oddValue(parseInt(ast.value, 10));
    }
    return null;
  }
});

function oddValue(value) {
  return value % 2 === 1 ? value : null;
}
*/


// Example http://graphql.org/graphql-js/type/#graphqlobjecttype
/*
var AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
    street: { type: GraphQLString },
    number: { type: GraphQLInt },
    formatted: {
      type: GraphQLString,
      resolve(obj) {
        return obj.number + ' ' + obj.street
      }
    }
  }
});

var PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    name: { type: GraphQLString },
    bestFriend: { type: PersonType },
  })
});
*/

// Example enum http://graphql.org/graphql-js/type/#graphqlenumtype
// var RGBType = new GraphQLEnumType({
//   name: 'RGB',
//   values: {
//     RED: { value: 0 },
//     GREEN: { value: 1 },
//     BLUE: { value: 2 }
//   }
// });

var types = {
  Odd: new graphql.GraphQLScalarType({
    name: 'Odd',
    description: 'odd value',
    serialize(_value) { return _value; },
    parseValue(_value) {
      //validation here
      if (_value === 1) {
        throw new graphql.GraphQLError('Example error.');
      }

      return _value;
    },
    parseLiteral(_value) {
      return null;
    }
  }),
  GraphQLEmail: {},
  GraphQLURL: {},
  GraphQLDate: {},
  GraphQLTime: {},
  GraphQLDateTime: {},
  GraphQLString: {},
  GraphQLPassword: {},
  GraphQLGeoPoint: new graphql.GraphQLObjectType({
    name: 'GraphQLGeoPoint',
    fields: {
      lat: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat) },
      lon: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat) },
      alt: { type: graphql.GraphQLFloat, defaultValue: 0 }
    }
  })
};

module.exports = types;
