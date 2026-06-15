const { Router } = require('express');
const pokedexRouter = Router();

pokedexRouter.get('/:name', (req, res) => {
    const { name } = req.params;
    // Here you would typically fetch the details of the Pokemon from a database or an API
    // For demonstration purposes, we'll just send back a custom message
    res.send(`You requested details for ${name}`);
});

pokedexRouter.get('/', (req, res) => {

    if (!params) {
        res.send("You requested for the list of all Pokemon");
    } else {
        res.send(` ${JSON.stringify(req.query)} - ${JSON.stringify(params)}`);
    }
});

module.exports = pokedexRouter;