import React, { useEffect, useState } from 'react';
import { useGetMovieByIdQuery } from '../../../redux/MoviesSlice';
import { Link, useParams } from 'react-router-dom';
import styles from './index.module.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useGetGenreByIdQuery } from '../../../redux/GenresSlice';
import controller from '../../../API/requests';

const MovieDetail = () => {
    const { id } = useParams(); 
    const { data: movie } = useGetMovieByIdQuery(id);
    const [myMovie, setMyMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [genres, setGenres] = useState([])
    const [myGenres, setmyGenres] = useState([])
    useEffect(() => {
        if (movie) {
            setMyMovie(movie.data);
            setGenres(JSON.parse(movie.data.genre))
        }
    }, [movie]);

    useEffect(() => {
        genres.map((id) => {
            controller.getOne('/api/genres', id).then((res) => {
                console.log(res.data);
                setmyGenres((curr) => [...curr, res.data])
            })
        })
    }, [genres])

    const handleCinemas = () => {
        setShowModal(!showModal);
    };

    const CustomTabPanel = (props) => {
        const { children, value, index } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}

            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    };

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value, setValue] = useState(0);

    if (!myMovie) {
        return null;
    }

    return (
        <>
            <div className={styles.movieHero}>
                <div className={styles.bgi}>
                    <img src={myMovie.bgImg} alt="" />
                </div>
                <div className={styles.film}>
                    <img src={myMovie.coverImg} alt="" />
                    <div>
                        <span>Now Showing</span>
                        <h1>{myMovie.name}</h1>
                        <div>
                            <span>{myMovie.runTime} min</span>
                            <span>|</span>
                            <span>{myMovie.releaseDate}</span>
                        </div>
                        <p>{myMovie.rating}</p>
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
            <div className={styles.mobile}>

                <div >
                    <div className="heading">
                        <h2>Times & Tickets</h2>
                        <button onClick={handleCinemas}>
                            <span>Add cinemas</span>
                        </button>
                    </div>
                </div>

                <div>
                    <div className="heading">
                        <h2>Teasers & Trailers</h2>
                    </div>
                    {/* <div className="trailers">
                    {myMovie.trailers && myMovie.trailers.map((trailer, idx) => (
                        // <iframe key={idx} src={`${trailer.trailer}`}></iframe>
                    ))}
                </div> */}
                </div>

                <div className={styles.trailers}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Synopsis" {...a11yProps(0)} />
                                <Tab label="Details" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <div>
                                <p>
                                    {myMovie.description}
                                </p>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div >
                                <dl>
                                    <dt>Director</dt>
                                    <dd>{myMovie.director}</dd>
                                    <dt>Cast</dt>
                                    <dd>{myMovie.cast}</dd>
                                    <dt>Genre</dt>
                                    {
                                        myGenres.map((genre) => {
                                            return (
                                                <span>{genre.name}, </span>
                                            )
                                        })
                                    }

                                    <dt>Rating</dt>
                                    <dd>{myMovie.rating}</dd>
                                    <dt>Release Date</dt>
                                    <dd>{myMovie.releaseDate}</dd>
                                    <dt>Runtime</dt>
                                    <dd>{myMovie.runTime} min</dd>
                                </dl>
                            </div>
                        </CustomTabPanel>

                    </Box>
                </div>

                <div className={styles.modal} style={{ transform: showModal ? "translateX(0%)" : "translateX(100%)" }}>


                    <div className={styles.modalHeader}>
                        <h2>
                            Select Cinemas
                        </h2>
                        <button class="modal__close-button" type="button">x</button>

                    </div>
                    <ul className={styles.states}>
                        <li>
                            <button type="button">
                                <span>Near Me</span>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <span>ACT</span>
                            </button>
                        </li>
                        <li className={styles.selected}>
                            <button type="button">
                                <span>NSW</span>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <span>QLD</span>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <span>SA</span>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <span>VIC</span>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <span>WA</span>
                            </button>
                        </li>
                    </ul>
                    <ul>
                        {/* Additional modal content */}
                    </ul>
                </div >
            </div>

        </>
    );
};

export default MovieDetail;