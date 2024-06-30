import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import CancelIcon from '@mui/icons-material/Cancel';
import { setTicketModalIsActive } from '../../redux/TicketModal';
import { setBasket } from '../../redux/BasketSlice';
import { setLoginIsActive } from '../../redux/LoginActiveBtnSlice';
const TicketModall = () => {
    const dispatch = useDispatch();
    const selectedTickets = useSelector((state) => state.selectedTickets);
    const ticketModal = useSelector((state) => state.ticketModal);
    const user = useSelector((state) => state.user);

    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };
    const myBasket = useSelector((state) => state.basket);
    // console.log('b', myBasket);
    const handleCheckout = () => {
        if (user.id != null) {
            const basketItems = {
                "tickets": selectedSeats,
                "hall": selectedTickets.time.tag,
                'time': selectedTickets.time.formattedTime,
                'movie': selectedTickets.movie.name,
                "location": selectedTickets.cinema.cinemaName,
                "price":5
            };
            const updatedBasket = Array.isArray(myBasket.basket) ? [...myBasket.basket, basketItems] : [basketItems];
            dispatch(setBasket(updatedBasket));
            localStorage.setItem("basket", JSON.stringify(updatedBasket));
        } else {
            dispatch(setTicketModalIsActive(false));
            dispatch(setLoginIsActive(true));
        }
    };


    const generateSeats = (rows, seatsPerRow) => {
        const seats = [];
        for (let row = 1; row <= rows; row++) {
            for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
                seats.push({
                    id: `${row}-${seatNumber}`,
                    row: row,
                    number: seatNumber,
                    isReserved: false
                });
            }
        }
        return seats;
    };

    const seats = generateSeats(10, 15);


    return (
        <div>
            <div className={ticketModal.ticketModalIsActive ? styles.ticketingIsActive : styles.isnotopen}>
                <div className={ticketModal.ticketModalIsActive ? styles.ticketing : styles.notticketing}>
                    <div className={styles.container}>
                        <button className={styles.close} onClick={() => dispatch(setTicketModalIsActive(false))}>
                            <CancelIcon />
                        </button>
                        <div className={styles.movie}>
                            <div className={styles.foreground}>
                                <h2>{selectedTickets.movie.name}</h2>
                                <span>{selectedTickets.movie.runTime} min</span>
                                <span>{selectedTickets.cinema.cinemaName}</span>
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
                                                        <span className={styles.name}>Screen</span>
                                                        <span className={styles.bor}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.seatGrid}>

                                            {seats.map(seat => (
                                                <div
                                                    key={seat.id}
                                                    className={`${styles.seat} ${seat.isReserved ? styles.reserved : ''} ${selectedSeats.includes(seat.id) ? styles.selected : ''}`}
                                                    onClick={() => handleSeatClick(seat.id)}
                                                    style={{
                                                        gridColumn: `${seat.number}`,
                                                        gridRow: seat.row
                                                    }}
                                                >
                                                    <span></span>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={selectedSeats.length > 0 ? styles.footer : styles.footerr}>
                                <button onClick={handleCheckout}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                    <div className="footer"></div>
                </div>
                <span></span>
            </div>
        </div>
    );
};

export default TicketModall;
