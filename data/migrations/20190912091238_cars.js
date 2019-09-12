
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      // Primary Key - Id that auto increments
      tbl.increments();
      // VIN, make, model, and mileage.
      tbl.string('vin').notNullable().unique();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.float('mileage').notNullable();
      // also track transmission type and status of the title (clean, salvage, etc.)
      tbl.string('transmission_type');
      tbl.string('title_status');
    });
};

exports.down = function(knex) {
  return knex.dropTableIfExists('cars')
};
