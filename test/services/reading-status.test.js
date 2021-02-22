const app = require('../../src/app');

describe('\'reading-status\' service', () => {
  it('registered the service', () => {
    const service = app.service('reading-status');
    expect(service).toBeTruthy();
  });
});
