
exports.up = function(knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('image').notNullable();
        table.decimal('likes').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('users');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
