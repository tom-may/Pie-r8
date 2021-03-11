
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username')
        table.string('first_name') 
        table.string('last_name')
        table.string('email')
        table.string('location')
        table.string('password')
        table.boolean('admin')
        table.bigint('time')
      })
    }

exports.down = function(knex) {
    return knex.schema.dropTable('users')
}
