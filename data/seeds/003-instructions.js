exports.seed = function(knex) {
    return knex('recipes')
        .truncate()
        .then(function() {
            return knex('recipes').insert([
                { recipe_id: 1, step_number: 1, instruction: 'Brown meat in skillet.' },
                { recipe_id: 1, step_number: 2, instruction: 'Add taco seasoning and let simmer.' },
                { recipe_id: 1, step_number: 3, instruction: 'Dish up meat onto shells. Add toppings.' },
                { recipe_id: 2, step_number: 1, instruction: 'Cook onions.' },
                { recipe_id: 2, step_number: 2, instruction: 'Add garlic. Cook until fragrant.' },
                { recipe_id: 2, step_number: 3, instruction: 'Make bread crumbs from bread. Mix with eggs.' },
                { recipe_id: 2, step_number: 4, instruction:  'Combine bread crumb mixture, cooked onions, and ground beef.'},
                { recipe_id: 2, step_number: 5, instruction: 'Put ingredients in loaf pan. Bake at 350.' },
                { recipe_id: 3, step_number: 1, instruction: 'Place bread on flat surface.' },
                { recipe_id: 3, step_number: 2, instruction:  'Smear jelly on one piece of bread.'},
                { recipe_id: 3, step_number: 3, instruction: 'Smother other piece in peanut butter.' },
                { recipe_id: 3, step_number: 4, instruction: 'Sit down and enjoy.' },
            ]);
        });
};
