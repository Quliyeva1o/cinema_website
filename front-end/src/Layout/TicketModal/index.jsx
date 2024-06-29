import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss'
import CancelIcon from '@mui/icons-material/Cancel';
import { setTicketModalIsActive } from '../../redux/TicketModal';
// import { setSelectedTickets } from '../../redux/TicketSlice';

const TicketModall = () => {
    const selectedTickets = useSelector((state) => state.selectedTickets);
    const dispatch = useDispatch()
    const ticketModal = useSelector((state) => state.ticketModal);
    console.log('t', ticketModal);
    console.log('t', selectedTickets);

    return (
        <div>
            <div className={ticketModal.ticketModalIsActive ? styles.ticketingIsActive : styles.isnotopen} >
                <div className={ticketModal.ticketModalIsActive ? styles.ticketing : styles.notticketing}>
                    <div className={styles.container}>
                        <button className={styles.close} onClick={() => {
                            dispatch(setTicketModalIsActive(false))
                        }}>
                            <CancelIcon />
                        </button>
                        <div className={styles.movie}>
                            <div className={styles.foreground}>
                                <h2>{selectedTickets.movie.name}</h2>
                                <span>
                                    {selectedTickets.movie.runTime} min
                                </span>
                                <span>
                                    {selectedTickets.cinema.cinemaName}
                                </span>
                                <span className={styles.scrim}></span>
                            </div>
                            <div className={styles.background}>
                                <img src={selectedTickets.movie.bgImg} alt="" />
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
                                                <span className={styles.time}>{selectedTickets.time.formattedTime}</span>
                                            </span>
                                            <span className={styles.attr}>
                                                <span>{selectedTickets.time.tag}</span>
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
        </div>
    )
}

export default TicketModall
