const connection = require('./connection')

function addUsers (user, db = connection) {
  return db('users')
  .insert(user, 'id')
  .then(ids => ids[0])
}

module.exports = {
  addUsers
}