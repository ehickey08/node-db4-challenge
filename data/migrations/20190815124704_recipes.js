exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 255)
                .unique()
                .notNullable();
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 255).notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.float('quantity')
                .unsigned()
                .notNullable();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('step_number')
                .unsigned()
                .notNullable();
            tbl.string('instruction', 255).notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('instructions');
};
