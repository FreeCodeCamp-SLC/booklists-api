// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class ReadingStatus extends Model {
  static get tableName() {
    return 'reading_status'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        name: { type: 'string' },
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
    .hasTable('reading_status')
    .then((exists) => {
      if (!exists) {
        db.schema
          .createTable('reading_status', (table) => {
            table.increments('id')
            table.string('name')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
          })
          .then(() => console.log('Created reading_status table')) // eslint-disable-line no-console
          .catch((e) => console.error('Error creating reading_status table', e)) // eslint-disable-line no-console
      }
    })
    .catch((e) => console.error('Error creating reading_status table', e)) // eslint-disable-line no-console

  return ReadingStatus
}
