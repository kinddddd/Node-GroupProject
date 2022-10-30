const express = require("express");
const { isAuth } = require("../../middleware/auth");
const Movie = require("./movie.model");
const router = express.Router();
const upload = require('../../middleware/file')
const { deleteFile } = require('../../middleware/delete')

router.get("/", async (req, res) => {
  try {
    const allMovies = await Movie.find().populate("info");
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json("Error al ver las peliculas", error);
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findById = await Movie.findById(id).populate("info");
    return res.status(200).json(findById);
  } catch (error) {
    return res.status(500).json("Error al buscar la pelicula por su id", error);
  }
});

router.get("/title/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const findByTitle = await Movie.findOne({ title: title }).populate("info");
    return res.status(200).json(findByTitle);
  } catch (error) {
    return res
      .status(500)
      .json("Error al buscar la pelicula por su titulo", error);
  }
});

router.post("/create", upload.single('img'), async (req, res) => {
  try {
    let image;
        if (req.file) {
            image = req.file.path;
        } else {
            image = req.body.img;
        }
        
    const newMovie = new Movie({
      title: req.body.title,
      img: image,
      info: req.body.info
    });

    const createdMovie = await newMovie.save();
    return res.status(200).json(createdMovie);
  } catch (error) {
    return res.status(500).json("Error al crear la pelicula", error);
  }
});

router.put("/edit/:id", [isAuth], async (req, res) => {
  try {
    const id = req.params.id;
    const modifiedMovie = new Movie(req.body);
    modifiedMovie._id = id;
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      modifiedMovie
    ).populate("info");
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json("Error al modificar la pelicula", error);
  }
});

router.delete("/delete/:id", [isAuth], async (req, res) => {
  try {
    const id = req.params.id;
    await Movie.findByIdAndDelete(id).populate("info");
    return res.status(200).json("Se ha borrado correctamente");
  } catch (error) {
    return res.status(500).json("Error al borrar la pelicula", error);
  }
});

module.exports = router;
