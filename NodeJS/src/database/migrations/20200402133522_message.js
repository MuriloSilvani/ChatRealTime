
exports.up = function (knex) {
    return knex.schema.createTable('message', function (table) {
        table.integer('id').primary();

        table.integer('id_send').notNullable();
        table.integer('id_receive').notNullable();
        table.string('message').notNullable();

        table.foreign('id_send').references('id').inTable('user');
        table.foreign('id_receive').references('id').inTable('user');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('message');
};
