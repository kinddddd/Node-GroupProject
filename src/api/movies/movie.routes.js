const express = require('express');
const Movie = require('./movie.model');

const router = express.Router();

router.get('/', async(req,res) =>{
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json('Error al ver las peliculas', error);
    }
});



module.exports = router;
