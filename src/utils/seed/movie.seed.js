const mongoose = require('mongoose');
const Movie = require('../../api/movies/movie.model');
const connectDb = require('../db');


const movies = [
    {
        title: 'The Matrix',
        img:'https://blu-ray-rezensionen.net/wp-content/uploads/2015/01/Matrix-Premium-Collection-Blu-ray-Review-Cover.jpg',
        info:'Funciona'
        
    },
    {
        title: 'nemo',
        img:'https://blu-ray-rezensionen.net/wp-content/uploads/2015/01/Matrix-Premium-Collection-Blu-ray-Review-Cover.jpg',
        info:'Funciona'
        
    },
    {
        title: 'batman',
        img:'https://blu-ray-rezensionen.net/wp-content/uploads/2015/01/Matrix-Premium-Collection-Blu-ray-Review-Cover.jpg',
        info:'Funciona'
        
    }
];
const moviesDocuments = movies.map((movie) => new Movie(movie));
connectDb()
.then(async () =>{
    await Movie.collection.drop();
        console.log('SEED :collecion movies eliminada correctamente');
    }

).catch((error)=>console.log('No se han podido eliminar' + error))
.then(async()=>{
     
    await Movie.insertMany(moviesDocuments);
    console.log('SEED: Se han añadido nuevas pelis')

})
.catch((error) => console.log('No he metido los datos' + error))
.finally(() => mongoose.disconnect());