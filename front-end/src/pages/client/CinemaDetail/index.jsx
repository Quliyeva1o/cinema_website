import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCinemaByIdQuery } from '../../../redux/CinemasSlice'
import styles from './index.module.scss'
const CinemaDetail = () => {
  const { id } = useParams()
  const { data: cinema } = useGetCinemaByIdQuery(id)
  const [myCinema, setMyCinema] = useState([])
  useEffect(() => {
    cinema && setMyCinema(cinema.data)
  }, [cinema])

  return (
    <>
      <div>
      
          <div class={styles.hero}>
            <div class={styles.foreground}>
              <div class={styles.wrapper}>
                <h1 >{myCinema.name}</h1>
                <p >{myCinema.adress}</p>
                <div >
                  <a  href={myCinema.map} target="_blank">
                    <svg width="18" height="18" fill="none">
                      <use xlink: href="/images/icons-1.0.0.svg#icon-directions"></use>
                    </svg>
                    <span >Get directions</span>
                  </a>
                </div>
              </div>
            </div>
            <span class={styles.scrim}></span>
            <img src={myCinema.img} alt="" />
          </div>
        </div>
      
    </>
  )
}

export default CinemaDetail
