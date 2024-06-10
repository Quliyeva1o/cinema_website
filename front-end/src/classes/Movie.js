import { nanoid } from 'nanoid'

class Movie {
    constructor(name, director, cast, genre, rating, description, runTime, releaseDate, trailer,ageRes) {
        this.id =nanoid()
        this.name = name,
            this.director = director,
            this.cast = cast,
            this.genre = genre,
            this.rating = rating,
            this.description = description,
            this.runTime = runTime,
            this.releaseDate = releaseDate,
            this.trailer = trailer,
            this.ageRes = ageRes,
            this.sessionTimes = []
    }
}
 
export default Movie