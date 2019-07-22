const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const pgdb = require('../../database/pgdb');
const mdb = require('../../database/mdb');

module.exports = new GraphQLObjectType({
  name: 'MeType',

  fields: () => {
    const ContestType = require('./contest');

    return {
      id: { type: GraphQLID },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      fullName: {
        type: GraphQLString,
        resolve: obj => `${obj.firstName} ${obj.lastName}`
      },
      email: { type: new GraphQLNonNull(GraphQLString) },
      createdAt: { type: GraphQLString },
      contests: {
        type: new GraphQLList(ContestType),
        resolve: (obj, args, { pgPool }) => pgdb(pgPool).getContests(obj)
      },
      contestsCount: {
        type: GraphQLInt,
        resolve(obj, args, { mPool }, { fieldName }) {
          return mdb(mPool).getCounts(obj, fieldName);
        }
      },
      namesCount: {
        type: GraphQLInt,
        resolve(obj, args, { mPool }, { fieldName }) {
          return mdb(mPool).getCounts(obj, fieldName);
        }
      },
      votesCount: {
        type: GraphQLInt,
        resolve(obj, args, { mPool }, { fieldName }) {
          return mdb(mPool).getCounts(obj, fieldName);
        }
      }
    };
  }
});
