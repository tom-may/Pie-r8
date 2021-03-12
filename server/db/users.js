const connection = require('./connection')

function addUsers (user, db = connection) {
  return db('users')
  .insert(user, 'id')
  // .then(ids => ids[0])
}

function updateUser (id, first_name, last_name, email, location, db = connection) {
  return db('users')
  .where('id', id)
  .update ({
    first_name: first_name,
    last_name: last_name,
    email: email,
    location, location
  })

}

module.exports = {
  addUsers,
  updateUser
}