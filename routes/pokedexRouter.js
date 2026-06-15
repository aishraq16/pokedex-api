const { Router } = require('express');
const pokedexRouter = Router();

pokedexRouter.get('/:name', (req, res) => {
    const { name } = req.params;
    // Here you would typically fetch the details of the Pokemon from a database or an API
    // For demonstration purposes, we'll just send back a custom message
    res.send(`You requested details for ${name}`);
});

pokedexRouter.get('/', (req, res) => {

    if (!req.query) {
        res.send("You requested for the list of all Pokemon");
    } else {
        const { type, region } = req.query
        res.send(`You requested for ${type} type Pokemon from the ${region} region`);
    }
});

module.exports = pokedexRouter;