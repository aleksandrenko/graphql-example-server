var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var getId = () => require('crypto').randomBytes(10).toString('hex');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query {
    messages: [Message]
    getMessage(id: ID!): Message
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
    deleteMessage(id: ID!): String
  }
`);

// If Message had any complex fields, we'd put them on this object.
class Message {
  constructor(id, {content, author}) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

// Maps username to content
var db = {};

var root = {
  messages: function () {
    return Object.keys(db).map((key) => {
      var object = db[key];
      object.id = key;

      return object;
    });
  },
  deleteMessage: function ({id}) {
    if (!db[id]) {
      throw new Error('no message exists with id ' + id);
    }

    db[id] = null;

    return "";
  },
  getMessage: function ({id}) {
    if (!db[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return new Message(id, db[id]);
  },
  createMessage: function ({input}) {
    var id = getId();
    db[id] = input;
    return new Message(id, input);
  },
  updateMessage: function ({id, input}) {
    if (!db[id]) {
      throw new Error('no message exists with id ' + id);
    }
    // This replaces all old data, but some apps might want partial update.
    db[id] = input;
    return new Message(id, input);
  },
}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});