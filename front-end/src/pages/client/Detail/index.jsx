import React, { useEffect, useState } from 'react'
import { useGetMovieByIdQuery } from '../../../redux/MoviesSlice';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams()
    const { data: movie } = useGetMovieByIdQuery(id)
    const [myMovie, setMyMovie] = useState([])
    useEffect(() => {
        setMyMovie(movie.data)
    }, [movie])

    return (
        <>
            <img src={myMovie.bgImg} alt="" />
        </>
    )
}

export default Detail
