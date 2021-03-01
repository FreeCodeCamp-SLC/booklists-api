exports.up = function(knex) {
  return knex.schema.table('users', function (table) {   
    table.integer('roleId')
  })
  
  
    
};

exports.down = function(knex) {
  
};
