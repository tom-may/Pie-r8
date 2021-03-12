const connection = require('./connection')

function addUsers (user, db = connection) {
  return db('users')
  .insert(user, 'id')
  // .then(ids => ids[0])
}

function updateUser (id, firstName, lastName, email, location, db = connection) {
  return db('users')
  .where('id', id)
  .update ({
    firstName: firstName,
    lastName: lastName,
    email: email,
    location, location
  })

}

module.exports = {
  addUsers,
  updateUser
}