exports.up = function(knex) {
  return knex.schema.createTable('empresa', function(table){
   table.string('id').primary();
   table.string('name').notNullable();
   table.string('pointPartida').notNullable();
   table.string('pointDestino').notNullable();
   table.decimal('date').notNullable();

   });
 
};

exports.down = function(knex) {
 return knex.schema.dropTable('empresa');
};
