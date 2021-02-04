const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const songSchema = new Schema(
    {
        title: String,
        artist: String,
        time: String
    }
)

const Song = mongoose.model("song", songSchema)

module.exports = Song