  
exports.up = function (knex) {
    return knex.schema.createTable('reviews', table => {
      table.increments('id')
      table.integer('user_ID')
      table.integer('bakery_ID')
      table.string('title') 
      table.string('pie') 
      table.integer('price')
      table.text('pros') 
      table.text('cons') 
      table.text('review') 
      table.integer('rating')
      table.integer('like_score')
      table.bigint('time')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('reviews')
  }