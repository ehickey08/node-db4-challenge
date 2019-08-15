exports.seed = function(knex) {
    return knex('recipes')
        .truncate()
        .then(function() {
            return knex('recipes').insert([
                { ingredient_name: 'Tacos' },
                { ingredient_name: 'Meatloaf' },
                { ingredient_name: 'PB&J' },
            ]);
        });
};
