const express = require('express');
const InfoMovies = require('./infoMovies.model');

const router = express.Router();

router.get('/', async(req,res) =>{
    try {
        const allInfo = await InfoMovies.find();
        return res.status(200).json(allInfo);
    } catch (error) {
        return res.status(500).json('Error al ver la información', error);
    }
});

router.get('/id/:id', async(req,res) =>{
    try {
        const id = req.params.id;
        const findById = await InfoMovies.findById(id);
        return res.status(200).json(findById);
    } catch (error) {
        return res.status(500).json('Error al buscar la id de la informacion', error);
    }
});

router.get('/title/:title', async(req,res) =>{
    try {
        const title = req.params.title;
        const findByTitle = await InfoMovies.findOne({title:title});
        return res.status(200).json(findByTitle);
    } catch (error) {
        return res.status(500).json('Error al buscar la info por su titulo', error);
    }
});

router.get('/year/:year', async(req,res) =>{
    try {
        const year = req.params.year;
        const findByYear = await InfoMovies.find({year:year});
        return res.status(200).json(findByYear);
    } catch (error) {
        return res.status(500).json('Error al buscar la info por su año', error);
    }
});

router.get('/genre/:genre', async(req,res) =>{
    try {
        const genre = req.params.genre;
        const findByGenre = await InfoMovies.find({genre:genre});
        return res.status(200).json(findByGenre);
    } catch (error) {
        return res.status(500).json('Error al buscar la info por su genero', error);
    }
});

router.post('/create', async(req,res) =>{
    try {
        const newInfo =new InfoMovies(req.body) ;
        const createdInfo = await newInfo.save(); 
        return res.status(200).json(createdInfo);
    } catch (error) {
        return res.status(500).json('Error al crear la info', error);
    }
});

router.put('/edit/:id', async(req,res) =>{
    try {
        const id = req.params.id;
        const modifiedInfo =new InfoMovies(req.body);
        modifiedInfo._id = id;
        const updatedInfo = await InfoMovies.findByIdAndUpdate(id,modifiedInfo); 
        return res.status(200).json(updatedInfo);
    } catch (error) {
        return res.status(500).json('Error al modificar la info', error);
    }
});

router.delete('/delete/:id', async(req,res) =>{
    try {
        const id = req.params.id;
         await InfoMovies.findByIdAndDelete(id); 
        return res.status(200).json('Se ha borrado correctamente');
    } catch (error) {
        return res.status(500).json('Error al borrar la info', error);
    }
});
module.exports = router;
