const database = require('../src/io/movies-data.json')

let moviesFromDanielBruhl = []

database.forEach((movie, index) => {
    if(movie.info && movie.info.actors) {
        const actors = movie.info.actors
        actors.forEach((actor, index) => {
            if('Daniel Bruhl' == actor) {
                moviesFromDanielBruhl.push(movie)
            }
        })
    }
})

moviesFromDanielBruhl.forEach((movie, index) => {
    console.log(`index:[${index}], movie:[${JSON.stringify(movie)}]\n`)
})
