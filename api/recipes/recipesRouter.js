const express = require('express');

const Recipes = require('./recipesModel')

const router = express.Router()

//All run through the /recipes route


//Following routes have to do with the recipe itself
router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipes.get();
        res.status(200).json(recipes);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The list of recipes could not be retrieved.',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipes.getById(req.params.id);
        res.status(200).json(recipe);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The recipe could not be retrieved.',
        });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newRecipe = await Recipes.add(req.body);
        res.status(201).json(newRecipe);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The recipe could not be added to the database',
        });
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updated = await Recipes.update(req.body, req.params.id);
        res.status(200).json(updated);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The recipe could not be updated in the database',
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const removed = await Recipes.getById(req.params.id);
        const success = await Recipes.remove(req.params.id);
        if (success) res.status(200).json(removed);
        else
            throw new Error({
                stat: 404,
                message:
                    'An recipe with that ID does not exist in the database.',
            });
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The recipe could not be deleted from the database',
        });
    }
});

//These routes let you control all the Recipes and quantities for a recipe
router.get('/:id/shoppingList', async (req, res, next) => {
    try{
        const list = await Recipes.getShoppingList(req.params.id)
        res.status(200).json(list);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The shopping list could not be retrieved.',
        });
    }
});

router.post('/:id/shoppingList', async (req, res, next) => {
    
});

router.put('/:id/shoppingList/:id', async (req, res, next) => {
    
});

router.delete('/:id/shoppingList/:id', async (req, res, next) => {
    
});

//These routes let you control the instructions for a recipe
router.get('/:id/instructions', async (req, res, next) => {
    try{
        const steps = await Recipes.getInstructions(req.params.id)
        res.status(200).json(steps);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The instructions could not be retrieved.',
        });
    }
});

router.post('/:id/instructions', async (req, res, next) => {
    
});

router.put('/:id/instructions/:id', async (req, res, next) => {
    
});

router.delete('/:id/instructions/:id', async (req, res, next) => {
    
});

module.exports = router;