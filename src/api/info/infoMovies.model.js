const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoSchema = new Schema(
    {
        genre:{type :String, required:true},
        year:{type :Number, required:true},
        duration:{type:Number, required:true},
        director:{type :String, required:true},
        synopsis:{type :String, required:true}
    }
    ,
    {
        timestamps: true
    }
);

const InfoMovies = mongoose.model('infomovies', infoSchema);

module.exports = InfoMovies;