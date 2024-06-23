import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.module.scss";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { useGetCinemasQuery } from '../../redux/CinemasSlice';
const ScreenExperiences = () => {
  
  const { data: cinemas, error, isLoading, refetch } = useGetCinemasQuery();


  const [myCinemas, setMyCinemas] = useState([])
  useEffect(() => {
    cinemas && setMyCinemas(cinemas.data)
  }, [cinemas]);
  return (
    
    <>
      <div className="heading">
        <h2>
          Events & Festivals</h2>
        <button>
          <span>Browse all</span>
        </button>
      </div>
      <div className="slider">
        <Swiper

          slidesPerView={4}
          spaceBetween={15}
          navigation={true}

          modules={[Navigation]}
          className={`mySwiper ${styles.swiper}`}
        >
          {myCinemas && myCinemas.map((cinema) => (
            <SwiperSlide className={styles.swiperSlide} key={cinema._id}>
              <div >
                <div className={styles.img}>
                  <img src={cinema.img} alt={cinema.name} />
                </div>
              </div>
              <span className={styles.span}></span>
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
    </>
  )
}

export default ScreenExperiences

