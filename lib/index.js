const express = require('express');
const graphqlHTTP = require('express-graphql');

const { nodeEnv } = require('./util');
const ncSchema = require('../schema');

const pg = require('pg');
const pgConfig = require('../config/pg')[nodeEnv];
const pgPool = new pg.Pool(pgConfig);

const { MongoClient } = require('mongodb');
const assert = require('assert');
const mConfig = require('../config/mongo')[nodeEnv];

console.log(`running in ${nodeEnv} mode...`);

const app = express();
const PORT = process.env.PORT || 3000;

MongoClient.connect(
  mConfig.url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    assert.equal(err, null);

    app.use(
      '/graphql',
      graphqlHTTP({
        schema: ncSchema,
        graphiql: true,
        context: { pgPool, mPool: client.db('contests') },
      })
    );

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  }
);
