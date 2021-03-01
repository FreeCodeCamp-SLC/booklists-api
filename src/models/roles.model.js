// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Roles extends Model {

  static get tableName() {
    return 'roles';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['role'],

      properties: {
        role: { type: 'string' }
      }
    };
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = function (app) {
  const db = app.get('knex');

  db.schema.hasTable('roles').then(exists => {
    if (!exists) {
      db.schema.createTable('roles', table => {
        table.increments('id');
        table.string('role');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
      })
        .then(() => db('roles').insert([
          { role: 'user' },
          {role: 'admin'}
        ]))
        .then(() => console.log('Created roles table')) // eslint-disable-line no-console
        .catch(e => console.error('Error creating roles table', e)); // eslint-disable-line no-console
    }
  })
    .catch(e => console.error('Error creating roles table', e)); // eslint-disable-line no-console
  
  return Roles;
};
