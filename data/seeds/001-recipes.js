exports.seed = function(knex) {
    return knex('recipes')
        .truncate()
        .then(function() {
            return knex('recipes').insert([
                { recipe_name: 'Tacos' },
                { recipe_name: 'Meatloaf' },
                { recipe_name: 'PB&J' },
            ]);
        });
};
