import React, { useEffect, useState } from 'react'
import { useGetMovieByIdQuery } from '../../../redux/MoviesSlice';
import { Link, useParams } from 'react-router-dom';
import styles from './index.module.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
const MovieDetail = () => {
    const { id } = useParams()
    const { data: movie } = useGetMovieByIdQuery(id)
    const [myMovie, setMyMovie] = useState([])
    useEffect(() => {
        movie && setMyMovie(movie.data)
    }, [movie])
    
    return (
        <>
            <div className={styles.movieHero}>
                <div className={styles.bgi}>
                    <img src={myMovie.bgImg} alt="" />
                </div>
                <div className={styles.film}>

                    <img src={myMovie.coverImg} alt="" />
                    <div >
                        <span >Now Showing</span>
                        <h1 >{myMovie.name}</h1>
                        <div >
                            <span >{myMovie.runTime} min</span>
                            <span >|</span>
                            <span >{myMovie.releaseDate}</span>
                        </div>
                        <p >{myMovie.rating}</p>
                        <button className={styles.icons}>
                            <span className={styles.icon}><PlayArrowIcon className={styles.play} /></span>
                            <span>Trailer</span>
                        </button>
                        <button className={styles.icons}>
                            <span className={styles.icon}><FavoriteIcon className={styles.heart} /></span>
                            <span>Watchlist</span>
                        </button>

                    </div>
                </div>
                <div className={styles.spann}></div>

            </div>
            <div>
                <div className="heading">
                    <h2>Times & Tickets</h2>
                    <button>
                        <span>Add cinemas</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MovieDetail
