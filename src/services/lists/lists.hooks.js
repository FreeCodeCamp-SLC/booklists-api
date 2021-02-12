const { authenticate } = require('@feathersjs/authentication').hooks

const sanitizeListCreate = require('../../hooks/sanitize-list-create');
const checkId = require('../../hooks/check-id');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [sanitizeListCreate()],
    update: [checkId()],
    patch: [checkId()],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
