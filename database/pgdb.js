const humps = require('humps');

module.exports = pgPool => {
  return {
    getUserById(id) {
      return pgPool
        .query(
          `
          SELECT * FROM users
          WHERE id = $1
          `,
          [id]
        )
        .then(res => humps.camelizeKeys(res.rows[0]));
    },
    getUserByApiKey(apiKey) {
      return pgPool
        .query(
          `
          SELECT * FROM users
          WHERE api_key = $1
          `,
          [apiKey]
        )
        .then(res => humps.camelizeKeys(res.rows[0]));
    },
    getContests(user) {
      return pgPool
        .query(
          `
          SELECT * FROM contests
          WHERE created_by = $1
          `,
          [user.id]
        )
        .then(res => humps.camelizeKeys(res.rows));
    },
    getNames(contest) {
      return pgPool
        .query(
          `
          SELECT * FROM names
          WHERE contest_id = $1
          `,
          [contest.id]
        )
        .then(res => humps.camelizeKeys(res.rows));
    }
  };
};
