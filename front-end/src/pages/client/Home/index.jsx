import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  "./index.module.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.scss';
import { getAllData } from "../../../redux/MoviesSlice.jsx";
const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <>
    <div className={styles.hero}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}

        className={`mySwiper ${styles.swiper}` }
        navigation={true}
      >
        {movies && movies.map((movie) => (
          <SwiperSlide className={styles.swiperSlide} key={movie.id}>
            <div >
              <div className={styles.textContent}>
                <h1>
                  {movie.name}
                </h1>
                <p>
                  {movie.description}
                </p>
              </div>
              <div className="img">
                <img src={movie.img} alt={movie.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  )
}

export default Home
