const { nodeEnv } = require('./util');
console.log(`running in ${nodeEnv} mode...`);

const query = process.argv[2];

const ncSchema = require('../schema');
const { graphql } = require('graphql');

graphql(ncSchema, query).then(result => {
  console.log(result);
});
