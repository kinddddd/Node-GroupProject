const mongoose = require("mongoose");
const Movie = require("../../api/movies/movie.model");
const connectDb = require("../db");

const movies = [
  {
    title: "El Cuarto Pasajero",
    img: "https://pics.filmaffinity.com/el_cuarto_pasajero-401262495-large.jpg",
  },
  {
    title: "Amsterdam",
    img: "https://pics.filmaffinity.com/amsterdam-212094748-large.jpg",
  },
  {
    title: "Compagnons",
    img: "https://pics.filmaffinity.com/compagnons-151729208-large.jpg",
  },
  {
    title: "Eden",
    img: "https://pics.filmaffinity.com/eden-533036937-large.jpg",
  },
  {
    title: "Sin novedad en el frente",
    img: "https://pics.filmaffinity.com/im_westen_nichts_neues-582072472-large.jpg",
  },
  {
    title: "Barbarian",
    img: "https://pics.filmaffinity.com/barbarian-646820684-large.jpg",
  },
];
const moviesDocuments = movies.map((movie) => new Movie(movie));
connectDb()
  .then(async () => {
    await Movie.collection.drop();
    console.log("SEED :collecion movies eliminada correctamente");
  })
  .catch((error) => console.log("No se han podido eliminar" + error))
  .then(async () => {
    await Movie.insertMany(moviesDocuments);
    console.log("SEED: Se han añadido nuevas pelis");
  })
  .catch((error) => console.log("No he metido los datos" + error))
  .finally(() => mongoose.disconnect());
