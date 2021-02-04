const mongoose = require("./connection")
const Song = require("../models/Songs")


const manySongs = require("./seedData.json")

Song.deleteMany({}).then( ()=>{
    List.insertMany(manySongs, (err, songs)=>{
        console.log('songs', songs)
       
    })
})