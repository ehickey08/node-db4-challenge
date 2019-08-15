const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
    getShoppingList,
    addToShoppingList,
    updateShoppingList,
    removeFromShoppingList,
    getInstructions,
    addInstruction,
    updateInstruction,
    removeInstruction,
};
function get() {
    return db('recipes');
}

function getById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function add(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(([id]) => getById(id));
}

function update(changes, id) {
    return db('recipes')
        .where({ id })
        .update(changes)
        .then(count => (count ? getById(id) : null));
}

function remove(id) {
    return db('recipes')
        .where({ id })
        .del();
}

function getShoppingList(id) {
    return db('recipe_ingredients as t')
        .join('recipes as r', 't.recipe_id', 'r.id')
        .join('ingredients as i', 't.ingredient_id', ' i.id')
        .where('recipe_id', id)
        .select(
            'r.recipe_name',
            'i.ingredient_name',
            't.quantity',
            't.measurement'
        )
        .orderBy('i.ingredient_name');
}

function addToShoppingList() {}

function updateShoppingList() {}

function removeFromShoppingList() {}

function getInstructions(id) {
    return db('instructions as i')
        .join('recipes as r', 'i.recipe_id', 'r.id')
        .where('recipe_id', id)
        .select(
            'r.recipe_name',
            'i.step_number',
            'i.instruction',
            'i.id as InstructionID'
        )
        .orderBy('i.step_number');
}

function addInstruction() {}

function updateInstruction() {}

function removeInstruction() {}
