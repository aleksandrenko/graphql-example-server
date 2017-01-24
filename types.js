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
  GraphQLEmail: new graphql.GraphQLScalarType({
    name: 'Email',
    description: 'GraphQLEmail',
    serialize(_value) { return _value; },
    parseValue(ast) {

      var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(ast.value)) {
        throw new graphql.GraphQLError('Invalid Email format.', [ast]);
      }

      return ast.value;
    },
    parseLiteral(_value) { return _value; }
  }),
  GraphQLURL: new graphql.GraphQLScalarType({
    name: 'URL',
    description: 'GraphQLURL',
    serialize(_value) { return _value; },
    parseValue(_value) { return _value; },
    parseLiteral(_value) { return _value; }
  }),
  GraphQLDate: new graphql.GraphQLScalarType({
    name: 'GraphQLDate',
    description: 'Date',
    serialize(_value) { return _value; },
    parseValue(_value) { return _value; },
    parseLiteral(_value) { return _value; }
  }),
  GraphQLTime: new graphql.GraphQLScalarType({
    name: 'GraphQLTime',
    description: 'Time',
    serialize(_value) { return _value; },
    parseValue(_value) { return _value; },
    parseLiteral(_value) { return _value; }
  }),
  GraphQLDateTime: new graphql.GraphQLScalarType({
    name: 'GraphQLDateTime',
    description: 'DateTime',
    serialize(_value) { return _value; },
    parseValue(_value) { return _value; },
    parseLiteral(_value) { return _value; }
  }),
  GraphQLString: new graphql.GraphQLScalarType({
    name: 'GraphQLString',
    description: 'String',
    serialize(_value) { return _value; },
    parseValue(_value) { return _value; },
    parseLiteral(_value) { return _value; }
  }),
  GraphQLPassword: new graphql.GraphQLScalarType({
    name: 'GraphQLPassword',
    description: 'Password',
    serialize(_value) { return _value; },
    parseValue(_value) { return _value; },
    parseLiteral(_value) { return _value; }
  }),
  GraphQLGeoPoint: new graphql.GraphQLObjectType({
    name: 'GeoPoint',
    fields: {
      lat: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat) },
      lon: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat) },
      alt: { type: graphql.GraphQLFloat, defaultValue: 0 }
    }
  })
};

module.exports = types;
