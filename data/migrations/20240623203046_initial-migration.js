exports.up = async function (knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipes_id');
            table.string('recipes_name', 200).notNullable().unique();
        })
        .createTable('ingredients', table => {
            table.increments('ingredients_id');
            table.string('ingredients_name', 200).notNullable().unique();
            table.string('ingredients_unit', 50);
        })
        .createTable('steps', table => {
            table.increments('step_id');
            table.string('step_text', 200).notNullable();
            table.integer('step_number').notNullable();
            table.integer('recipes_id')
                .unsigned()
                .notNullable()
                .references('recipes_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
        })
        .createTable('step_ingredients', table => {
            table.increments('step_ingredients_id');
            table.float('quantity').notNullable();
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
        });
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};