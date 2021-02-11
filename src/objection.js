const { Model } = require('objection');
const knex = require('knex');

module.exports = function (app) {
  let { client, connection } = app.get('postgres');
  if(process.env.NODE_ENV === 'production') {
    connection = {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PWD,
      database : process.env.DB_NAME,
      ssl: true,
      rejectUnauthorized: false
    }
  }
  console.log('CLIENT', client)
  console.log('CONNNECTION', connection)
  const db = knex({ client, connection, useNullAsDefault: false });

  Model.knex(db);

  app.set('knex', db);
};
