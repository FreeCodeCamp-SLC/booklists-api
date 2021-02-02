// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    // const { data, user } = context
    // console.log('CONTEXT', data)
    // if (user.id !== data.userId) {
    //   throw new Error('Cannot create list for another user')
    // }

    return context
  }
}
