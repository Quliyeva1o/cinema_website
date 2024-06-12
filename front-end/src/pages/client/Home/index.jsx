import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import styles from "./index.modules.scss";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './index.modules.scss'
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from "../../../redux/MoviesSlice.jsx";
const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}

        className="mySwiper"
        navigation={true}
      >
        {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div>
            <img src={movie.img} alt={movie.title} />
          </div>
        </SwiperSlide>
      ))}



      </Swiper>
    </>
  )
}

export default Home
