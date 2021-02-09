// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class Books extends Model {
  static get tableName() {
    return 'books'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'text',
        'title',
        'author',
        'readingStatusid',
        'userId',
        'listId',
      ],

      properties: {
        text: { type: 'string' },
        dateStarted: { type: 'date' },
        dateFinished: { type: 'date' },
        title: { type: 'string' },
        author: { type: 'string' },
        readingStatusid: { type: 'integer' },
        imageUrl: { type: 'string' },
        pages: { type: 'integer' },
        userId: { type: 'integer' },
        listId: { type: 'integer' },
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
    .hasTable('books')
    .then((exists) => {
      if (!exists) {
        db.schema
          .createTable('books', (table) => {
            table.increments('id')
            table.string('text')
            table.date('dateFinished')
            table.date('dateStarted')
            table.string('title')
            table.string('author')
            table.integer('readingStatusId')
            table.foreign('readingStatusId').references('reading_status.id')
            table.string('imageUrl')
            table.integer('pages')
            table.integer('userId')
            table.foreign('userId').references('users.id')
            table.integer('listId')
            table.foreign('listId').references('lists.id')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
          })
          .then(() => console.log('Created books table')) // eslint-disable-line no-console
          .catch((e) => console.error('Error creating books table', e)) // eslint-disable-line no-console
      }
    })
    .catch((e) => console.error('Error creating books table', e)) // eslint-disable-line no-console

  return Books
}
