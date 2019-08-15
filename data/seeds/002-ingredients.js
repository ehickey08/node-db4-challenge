exports.seed = function(knex) {
    return knex('ingredients')
        .truncate()
        .then(function() {
            return knex('ingredients').insert([
                { ingredient_name: 'Ground Beef' },
                { ingredient_name: 'Taco Seasoning' },
                { ingredient_name: 'Taco Shells' },
                { ingredient_name: 'Guacamole' },
                { ingredient_name: 'Ketchup' },
                { ingredient_name: 'Bacon' },
                { ingredient_name: 'Thyme' },
                { ingredient_name: 'Dried Parsley' },
                { ingredient_name: 'Salt' },
                { ingredient_name: 'Pepper' },
                { ingredient_name: 'Peanut Butter' },
                { ingredient_name: 'Jelly' },
                { ingredient_name: 'Bread' },
                { ingredient_name: 'Eggs' },
                { ingredient_name: 'Salsa' },
                { ingredient_name: 'Red Onions' },
                { ingredient_name: 'Garlic' },
            ]);
        });
};
