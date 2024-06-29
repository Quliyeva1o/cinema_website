import React, { useEffect, useState } from 'react';
import { useGetTimesQuery } from '../../../redux/TimesSlice';
import controller from '../../../API/requests';
import styles from './index.module.scss'
import CancelIcon from '@mui/icons-material/Cancel';
const SessionTimes = () => {
  const { data: times, error, isLoading, refetch } = useGetTimesQuery();
  const [sessionTimes, setSessionTimes] = useState([]);
  const [ticketMovie, setTicketMovie] = useState([])
  const [ticketTime, setticketTime] = useState([])
  const [ticketCinema, setticketCinema] = useState([])
  const [ticketisopen, setTicketisopen] = useState(false)
  const handleTicket = (movie, time, cinema) => {
    setTicketMovie(movie)
    setticketTime(time)
    setticketCinema(cinema)
    setTicketisopen(!ticketisopen)
  }

  // console.log(ticketisopen);
  console.log(ticketTime);

  useEffect(() => {
    if (times) {
      const fetchMovies = async () => {
        try {
          const moviesPromises = times.data.map(time =>
            controller.getOne('/api/movies', time.movieId)
          );
          const moviesData = await Promise.all(moviesPromises);
          setSessionTimes(moviesData.map(res => res.data));
        } catch (error) {
          console.error('Error fetching movie data:', error);
        }
      };

      fetchMovies();
    }
  }, [times]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div> <ul className={styles.sessionTimes}>
        {sessionTimes.map((movie, index) => (

          <li key={index} >
            <div className={styles.movie}>
              <a style={{
                width: "156px"
              }}>
                <img src={movie.coverImg} alt="" />
              </a>
              <div>
                <h2>
                  <a href="">
                    {movie.name}
                  </a>
                </h2>
                <span style={{ display: "flex" }}><span className={styles.min}>
                  {movie.runTime} min |
                </span>
                  <span className={styles.min}>
                    {movie.releaseDate}
                  </span></span>
                <span>{movie.cast}</span>

              </div>
            </div>
            {
              times.data.find((x) => (x.movieId == movie._id)).showTimes.map((x, ii) =>
              (
                <div className={styles.times} key={ii}>
                  <h2>{x.cinemaName}</h2>
                  <ul>
                    {x.showTime.map((s, idxx) => (
                      <li key={idxx}>
                        <a onClick={() => { handleTicket(movie, s, x) }} style={{ display: "flex", flexDirection: "column" }}>
                          <span>
                            {s.formattedTime}
                          </span>
                          <span>{s.tag}</span>
                        </a>
                      </li>
                    )
                    )}
                  </ul>
                </div>
              )
              )
            }
          </li>
        ))}
      </ul></div>
      <div className={ticketisopen ? styles.ticketingIsActive : styles.isnotopen} >
        <div className={ticketisopen ? styles.ticketing : styles.notticketing}>

          <div className={styles.container}>
            <button className={styles.close} onClick={()=>{setTicketisopen(!ticketisopen)}}>
              <CancelIcon/>
            </button>
            <div className={styles.movie}>
              <div className={styles.foreground}>
                <h2>{ticketMovie.name}</h2>
                <span>
                  {ticketMovie.runTime} min
                </span>
                <span>
                  {ticketCinema.cinemaName}
                </span>
                <span className={styles.scrim}></span>
              </div>
              <div className={styles.background}>
                <img src={ticketMovie.bgImg} alt="" />
                <span className={styles.scrimleft}></span>
                <span className={styles.scrimright}></span>
              </div>
            </div>
            <div className={styles.session}>
              <div>
                <div className={styles.wrapper}>
                  <div>
                    <button>
                      <span>
                        <span className={styles.time}>{ticketTime.formattedTime}</span>
                      </span>
                      <span className={styles.attr}>
                        <span>{ticketTime.tag}</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.step}>
              <div>
                <h3>
                  <span>Choose your seats</span>
                  <button>Show legend</button>
                </h3>
              </div>
              <div className={styles.seats}>
                <div className={styles.wrapper}>
                  <div className={styles.map}>
                    <div className={styles.border}>
                      <div>
                        <div>
                          <div className={styles.screen}>
                            <span className={styles.name}>
                              Screen
                            </span>
                            <span className={styles.bor}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footer}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
          </div>
        </div>
        <span></span>
      </div>
    </>

  );
};

export default SessionTimes;
