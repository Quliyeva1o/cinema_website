import React, { useState } from 'react';
import "./index.module.scss";
import { useEffect } from 'react';
import { useGetCinemasQuery } from '../../../redux/CinemasSlice';
import { Link } from 'react-router-dom';
import styles from "./index.module.scss"
const Cinemas = () => {
  const { data: cinemas, error, isLoading, refetch } = useGetCinemasQuery();
  const [myCinemas, setMyCinemas] = useState([])
  useEffect(() => {
    cinemas && setMyCinemas(cinemas.data)
  }, [cinemas]);

  return (
    <>
      <div className="heading">
        <h2>Cinemas
        </h2>
      </div>
      <div className={styles.cards}>
        {myCinemas && myCinemas.map((cinema) => (
          <div className={styles.card}>
            <img src={cinema.img} alt={cinema.title} />
            <div>
              <h2>
                <Link to={`/cinemas/${cinema._id}`}><span>{cinema.name}</span></Link>
              </h2>
              <ul>
              {cinema.tags && cinema.tags.map((tag, index) => (
                  <li key={index}>{tag.tagName}</li>
                ))}
              </ul>
              <div>
                <Link to={`/cinemas/${cinema._id}`}>More details</Link></div></div>
          </div>
        ))}

      </div>
    </>
  )
}

export default Cinemas
