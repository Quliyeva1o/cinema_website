import React, { useEffect, useState } from 'react'
import { useGetMoviesQuery } from '../../redux/MoviesSlice';
import styles from './index.module.scss'
const MovieCards = () => {
    const { data: movies, error, isLoading, refetch } = useGetMoviesQuery();
    const [myMovies, setMyMovies] = useState([])
    useEffect(() => {
        movies && setMyMovies(movies.data)
    }, [movies]);

    return (
        <div className={styles.films}>
            <div className={styles.nav}>
                <div className={styles.tabs}><ul>
                    <li>
                        <button type="button" className={`${styles.first} ${styles.isSelected}`}><span >Now Showing</span></button>
                    </li>
                    <li>
                        <button type="button"><span>Coming Soon</span></button>
                    </li>
                </ul></div>
                <div>
                    <div className={styles.filters}>
                        <ul>
                            <li><button type="button"><span><span>Legends &amp; </span>Filters</span></button></li>
                            <li><button type="button"><span>Popularity</span></button></li>
                            {/* <li ><button type="button"></button></li>
                            <li ><button type="button"></button></li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <ul>{
                    myMovies.map((movie, idx) => {
                        return (<li>
                            <div className={styles.wrapper}>
                                <a href={`/movies/${movie._id}`}>
                                    <img src={movie.coverImg} alt="" />
                                </a>
                                <div>
                                    <h2>
                                        <a href={`/movies/${movie._id}`}>
                                            {movie.name}
                                        </a>
                                    </h2>
                                    <span>
                                        <span>
                                            {movie.runTime} min
                                        </span>
                                        <span>|</span>
                                        <span>{movie.releaseDate}</span>
                                    </span>
                                    <span>
                                        {movie.description}
                                    </span>
                                </div>
                            </div>
                        </li>)
                    })}</ul>
            </div>
        </div>
    )
}

export default MovieCards
