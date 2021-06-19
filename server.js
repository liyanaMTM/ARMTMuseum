const express = require('express')
const app = express ()
const fetch = require ("node-fetch")
const cors = require('cors')


app.use(cors())

app.get( "/", async (req, res) =>{
    const response =  fetch ("https://github.com/liyanaMTM/ARMTMuseum/blob/bf273d5b1b957a9f3777a57156ef2549ed281498/public/object/Kitil.gltf")
    res.json(await response.json())
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})