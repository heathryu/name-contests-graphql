conn = new Mongo();

db = conn.getDB('contests');

db.users.insertMany([
  {
    userId: 1,
    contestsCount: 3,
    namesCount: 0,
    votesCount: 4
  },
  {
    userId: 2,
    contestsCount: 0,
    namesCount: 4,
    votesCount: 4
  }
]);
