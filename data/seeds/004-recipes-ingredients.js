exports.seed = function(knex) {
    return knex('recipes')
        .truncate()
        .then(function() {
            return knex('recipes').insert([
                {
                    recipe_id: 1,
                    ingredient_id: 1,
                    quantity: 1,
                    measurement: 'lb',
                },
                {
                    recipe_id: 1,
                    ingredient_id: 2,
                    quantity: 1,
                    measurement: 'packet',
                },
                { recipe_id: 1, ingredient_id: 3, quantity: 8 },
                {
                    recipe_id: 1,
                    ingredient_id: 4,
                    quantity: 0.5,
                    measurement: 'cup',
                },
                {
                    recipe_id: 1,
                    ingredient_id: 15,
                    quantity: 0.5,
                    measurement: 'cup',
                },
                {
                    recipe_id: 2,
                    ingredient_id: 5,
                    quantity: 0.25,
                    measurement: 'cup',
                },
                {
                    recipe_id: 2,
                    ingredient_id: 6,
                    quantity: 6,
                    measurement: 'slices',
                },
                {
                    recipe_id: 2,
                    ingredient_id: 7,
                    quantity: 1,
                    measurement: 'pinch',
                },
                {
                    recipe_id: 2,
                    ingredient_id: 8,
                    quantity: 2,
                    measurement: 'pinches',
                },
                {
                    recipe_id: 2,
                    ingredient_id: 9,
                    quantity: 1,
                    measurement: 'tsp',
                },
                {
                    recipe_id: 2,
                    ingredient_id: 10,
                    quantity: 1,
                    measurement: 'tbsp',
                },
                {
                    recipe_id: 2,
                    ingredient_id: 13,
                    quantity: 4,
                    measurement: 'slices',
                },
                { recipe_id: 2, ingredient_id: 14, quantity: 2 },
                {
                    recipe_id: 2,
                    ingredient_id: 16,
                    quantity: 2,
                    measurement: 'cups',
                },
                {
                    recipe_id: 2,
                    ingredient_id: 17,
                    quantity: 4,
                    measurement: 'cloves',
                },
                {
                    recipe_id: 3,
                    ingredient_id: 11,
                    quantity: 2,
                    measurement: 'tbsp',
                },
                {
                    recipe_id: 3,
                    ingredient_id: 12,
                    quantity: 1,
                    measurement: 'tbsp',
                },
                {
                    recipe_id: 3,
                    ingredient_id: 13,
                    quantity: 2,
                    measurement: 'slices',
                },
            ]);
        });
};
