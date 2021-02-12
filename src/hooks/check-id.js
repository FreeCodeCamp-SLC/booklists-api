// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { Forbidden } = require('@feathersjs/errors')

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const updateObj = await context.app.service(context.path).get(context.arguments[0])
    if(updateObj.userId !== context.params.user.id) {
      throw new Forbidden('USER ID DOES NOT MATCH')
    }
    
    return context;
  };
};
