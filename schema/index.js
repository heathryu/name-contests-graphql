const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'World'
    }
  }
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = ncSchema;
