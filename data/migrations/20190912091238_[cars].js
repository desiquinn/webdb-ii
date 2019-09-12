
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      // Primary Key - Id that auto increments
      tbl.increments();
      // VIN, make, model, and mileage.
      tbl.string('vin').notNullable().unique();
      tbl.string('make').notNullable();
      tbl.sting('model').notNullable();
      tbl.float('mileage').notNullable();
      // also track transmission type and status of the title (clean, salvage, etc.)
      tbl.string('transmission_type').notNullable();
      tbl.string('title_status').notNullable();
    });
};

exports.down = function(knex) {
  
};
