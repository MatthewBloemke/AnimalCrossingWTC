
exports.up = function(knex) {
  return knex.schema.createTable("cf_bugs", (table) => {
      table.increments("bug_id").primary();
      table.string("bug_name")
      table.string("bug_image")
      table.integer("price")
      table.string("location");
      table.time("catch_time_start");
      table.time("catch_time_end")
      table.specificType("months_array", "integer ARRAY")    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("cf_bugs")
}
