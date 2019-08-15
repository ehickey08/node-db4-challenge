const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('./api/recipes/recipesRouter');
const ingredientsRouter = require('./api/ingredients/ingredientsRouter');


const server = express();

server.get('/', (req, res, next) => {
    res.send('Server is up and running!');
});

server.use(helmet());
server.use(express.json());
server.use('/recipes', recipeRouter);
server.use('/ingredients', ingredientsRouter);

server.use(errorHandler);

function errorHandler(error, req, res, next) {
    console.log(error.err);
    res.status(error.stat).json({ error: error.message });
}

module.exports = server;
