const express = require('express');
const graphqlHTTP = require('express-graphql');

const { nodeEnv } = require('./util');
const ncSchema = require('../schema');

const pg = require('pg');
const pgConfig = require('../config/pg')[nodeEnv];
const pgPool = new pg.Pool(pgConfig);

console.log(`running in ${nodeEnv} mode...`);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: ncSchema,
    graphiql: true,
    context: { pgPool }
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
