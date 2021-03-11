
exports.up = function (knex) {
    return knex.schema.createTable('bakeries', table => {
      table.increments('id')
      table.string('name')
      table.string('address') 
      table.string('best_pie')
      table.integer('avg_score')
      table.bigint('time')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('bakeries')
  }
