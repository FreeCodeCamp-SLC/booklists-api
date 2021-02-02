// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class Lists extends Model {
  static get tableName() {
    return 'lists'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'year', 'userId'],

      properties: {
        name: { type: 'string' },
        year: { type: 'integer' },
        userId: { type: 'integer' },
      },
    }
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString()
  }
}

module.exports = function (app) {
  const db = app.get('knex')

  db.schema
    .hasTable('lists')
    .then((exists) => {
      if (!exists) {
        db.schema
          .createTable('lists', (table) => {
            table.increments('id')
            table.string('name')
            table.integer('year')
            table.integer('userId')
            table.foreign('userId').references('users.id')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
          })
          .then(() => console.log('Created lists table')) // eslint-disable-line no-console
          .catch((e) => console.error('Error creating lists table', e)) // eslint-disable-line no-console
      }
    })
    .catch((e) => console.error('Error creating lists table', e)) // eslint-disable-line no-console

  return Lists
}
