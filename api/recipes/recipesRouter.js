const express = require('express');

const Recipes = require('./recipesModel')

const router = express.Router()

//All run through the /recipes route


//Following routes have to do with the recipe itself
router.get('/', (req, res, next) => {
    
});

router.get('/:id', (req, res, next) => {
    
});

router.post('/', (req, res, next) => {
    
});

router.put('/:id', (req, res, next) => {
    
});

router.delete('/:id', (req, res, next) => {
    
});

//These routes let you control all the ingredients and quantities for a recipe
router.get('/:id/shoppingList', (req, res, next) => {
    
});

router.post('/:id/shoppingList', (req, res, next) => {
    
});

router.put('/:id/shoppingList/:id', (req, res, next) => {
    
});

router.delete('/:id/shoppingList/:id', (req, res, next) => {
    
});

//These routes let you control the instructions for a recipe
router.get('/:id/instructions', (req, res, next) => {
    
});

router.post('/:id/instructions', (req, res, next) => {
    
});

router.put('/:id/instructions/:id', (req, res, next) => {
    
});

router.delete('/:id/instructions/:id', (req, res, next) => {
    
});

module.exports = router;