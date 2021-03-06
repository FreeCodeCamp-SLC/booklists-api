const users = require('./users/users.service.js');
const lists = require('./lists/lists.service.js');
const readingStatus = require('./reading-status/reading-status.service.js');
const books = require('./books/books.service.js');
const roles = require('./roles/roles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(roles);
  app.configure(users);
  app.configure(lists);
  app.configure(readingStatus);
  app.configure(books);
};
