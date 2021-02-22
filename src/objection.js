const { Model } = require('objection');
const knex = require('knex');

module.exports = function (app) {
  let { client, connection } = app.get('postgres');
  if(process.env.NODE_ENV === 'production') {
    connection = { connectionString: process.env.DB_URL, ssl: { rejectUnauthorized: false } }
  }
  const db = knex({ client, connection, useNullAsDefault: false });

  Model.knex(db);

  app.set('knex', db);
};
