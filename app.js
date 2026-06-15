// phase 1
//create an express server listening on port 3000
//make a route like /pokemon/:name so when users visit /pokemon/pikachu, 
// they will see the details of pikachu
//if a user visits a route with query parameters, retrieve the parameters
//and send back a custom message

const express = require('express');
const app = express();
const PORT = 3000;

const pokedexRouter = require('./routes/pokedexRouter');

app.use('/pokemon', pokedexRouter);

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server is running on port ${PORT}`);
});     
