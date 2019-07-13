const humps = require('humps');

module.exports = pgPool => {
  return {
    getUser(apiKey) {
      return pgPool
        .query(
          `
          SELECT * FROM users
          WHERE api_key = $1
          `,
          [apiKey]
        )
        .then(res => humps.camelizeKeys(res.rows[0]));
    }
  };
};
