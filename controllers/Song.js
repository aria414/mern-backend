const express = require('express')
const router = express.Router()
const Song =require('../models/Songs')

// INDEX - Get all Songs
router.get("/", async (req, res)=>{
    res.json(await Song.find({}))
})

// CREATE - Create new Song, artist, time
router.post('/', async (req, res)=>{
    res.json(await Song.create(req.body))
})

// UPDATE - Update a song
router.put('/:id', async (req, res)=>{

    res.json(await Song.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

// DESTROY - remove a song
router.delete('/:id', async (req, res)=>{
    res.json( await Song.findByIdAndRemove(req.params.id))
})

module.exports = router