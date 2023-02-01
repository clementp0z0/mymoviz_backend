var express = require('express');
const { response } = require('../app');
var router = express.Router();

router.get('/movies', (req,res)=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.OWN_KEY_API}`)
    .then(response =>response.json())
    .then(data => {
        res.json({movies: data.results})
    })
})
module.exports = router;
