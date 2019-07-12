const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      description: 'The *mandatory* hello world example',
      resolve: () => 'World'
    }
  }
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = ncSchema;
