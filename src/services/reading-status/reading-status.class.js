const { Service } = require('feathers-objection');

exports.ReadingStatus = class ReadingStatus extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
