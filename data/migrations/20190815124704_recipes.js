exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name')
                .unique()
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name')
                .unique()
                .notNullable();
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.float('quantity', 2)
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
            tbl.integer('instruction_number')
                .unsigned()
                .notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('instructions');
};
