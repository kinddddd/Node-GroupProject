const express = require('express');
const InfoMovies = require('./infoMovies.model');

const router = express.Router();

router.post('/create', async(req,res) =>{
    try {
        const newInfo =new InfoMovies(req.body) ;
        const createdInfo = await newInfo.save(); 
        return res.status(200).json(createdInfo);
    } catch (error) {
        return res.status(500).json('Error al crear la info', error);
    }
});
module.exports = router;
