const { Model } = require('objection');
const knex = require('knex');

module.exports = function (app) {
  let { client, connection } = app.get('postgres');
  if(process.env.NODE_ENV === 'production') {
    connection += '?ssl=true'
  }
  console.log('CLIENT', client)
  console.log('CONNNECTION', connection)
  const db = knex({ client, connection, useNullAsDefault: false });

  Model.knex(db);

  app.set('knex', db);
};
