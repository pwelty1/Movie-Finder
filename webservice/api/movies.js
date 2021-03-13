const router = require('express-promise-router')()
const handlers = router._handlers = {}
//const bodyParser = require('body-parser')
const debug = require('debug')('movie-lookup:api:movie')
const axios = require('axios')
const {tmdb_headers} = require('../loadConfig.js')

router.get('/', handlers.get_movie = async (req, res) => {
    const movie_url = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&region=US&query="
    const image_url = "https://image.tmdb.org/t/p/w500"
    try {
        const limit =  10
        const search = req.query.search.replace(/ /g, "+")
        const url = movie_url + search
        debug(url)
        const {data} = await axios.get(url, tmdb_headers)

        const results = data.results.map((result) => {
            const movie = {
                "movie_id": result.id,
                "title": result.original_title,
                "poster_image_url": image_url + result.poster_path,
                "popularity_summary": `${result.popularity} out of ${result.vote_count}`
            }
            return movie
        });

        if(results.length > limit){
            res.status(200).json(results.slice(0,limit));
        }
        else {
            res.status(200).json(results);
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
  })

module.exports = router