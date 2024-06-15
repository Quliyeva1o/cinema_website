import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.module.scss";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { useGetEventsQuery } from '../../redux/EventsSlice';
const EventsFestivals = () => {
  
  const { data: events, error, isLoading, refetch } = useGetEventsQuery();
  const [myEvents, setMyEvents] = useState([])
  useEffect(() => {
    events && setMyEvents(events.data)
  }, [events]);

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

          slidesPerView={3}
          spaceBetween={15}
          navigation={true}

          modules={[Navigation]}
          className={`mySwiper ${styles.swiper}`}
        >
          {myEvents && myEvents.map((event) => (
            <SwiperSlide className={styles.swiperSlide} key={event.id}>
              <div >
                <div className={styles.img}>
                  <img src={event.coverImg} alt={event.title} />
                </div>
                <div className={styles.textContent}>
                  <h2>
                    <Link>
                      {event.name}
                    </Link>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
    </>
  )
}

export default EventsFestivals
