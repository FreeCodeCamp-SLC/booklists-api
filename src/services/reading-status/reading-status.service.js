// Initializes the `reading-status` service on path `/reading-status`
const { ReadingStatus } = require('./reading-status.class');
const createModel = require('../../models/reading-status.model');
const hooks = require('./reading-status.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/reading-status', new ReadingStatus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('reading-status');

  service.hooks(hooks);
};
