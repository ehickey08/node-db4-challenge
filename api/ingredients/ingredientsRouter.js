const express = require('express');

const Ingredients = require('./ingredientsModel');

const router = express.Router();

//All run through the /ingredients route

router.get('/', async (req, res, next) => {
    try {
        const ingreds = await Ingredients.get();
        res.status(200).json(ingreds);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The list of ingredients could not be retrieved.',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const ingred = await Ingredients.getById(req.params.id);
        res.status(200).json(ingred);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The ingredient could not be retrieved.',
        });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newIngred = await Ingredients.add(req.body);
        res.status(201).json(newIngred);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The ingredient could not be added to the database',
        });
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updated = await Ingredients.update(req.body, req.params.id);
        res.status(200).json(updated);
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The ingredient could not be updated in the database',
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const removed = await Ingredients.getById(req.params.id);
        const success = await Ingredients.remove(req.params.id);
        if (success) res.status(200).json(removed);
        else
            throw new Error({
                stat: 404,
                message:
                    'An ingredient with that ID does not exist in the database.',
            });
    } catch (err) {
        next({
            err,
            stat: 500,
            message: 'The ingredient could not be deleted from the database',
        });
    }
});

module.exports = router;
