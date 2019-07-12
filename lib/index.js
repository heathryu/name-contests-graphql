const express = require('express');
const graphqlHTTP = require('express-graphql');

const { nodeEnv } = require('./util');
const ncSchema = require('../schema');

console.log(`running in ${nodeEnv} mode...`);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: ncSchema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
