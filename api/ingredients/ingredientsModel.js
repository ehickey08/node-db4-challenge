const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    add,
    update,
    remove,
    getAllRecipes
};

function get() {
    return db('ingredients');
}

function getById(id) {
    return db('ingredients')
        .where({ id })
        .first();
}

function add(ingredient) {
    return db('ingredients')
        .insert(ingredient)
        .then(([id]) => getById(id));
}

function update(changes, id) {
    return db('ingredients')
        .where({ id })
        .update(changes)
        .then(count => (count ? getById(id) : null));
}

function remove(id) {
    return db('ingredients')
        .where({ id })
        .del();
}

function getAllRecipes(id){
    return db('recipe_ingredients as t')
    .join('recipes as r', 't.recipe_id', 'r.id')
    .where('t.ingredient_id', id)
    .select('r.recipe_name')
}