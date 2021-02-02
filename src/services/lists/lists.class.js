const { Service } = require('feathers-objection');

exports.Lists = class Lists extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
