import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useGetCinemasQuery } from '../../redux/CinemasSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCinemaModalIsActive } from '../../redux/CinemaModal';
import { setSelectedCinemas } from '../../redux/SelectedCinemas';
const CinemasModal = () => {
 
    const cinemaModal = useSelector((state) => state.cinemaModal);
    const dispatch=useDispatch()
    const { data: cinemas, error, isLoading, refetch } = useGetCinemasQuery();
    const [myCinemas, setMyCinemas] = useState([]);
    const [selectedState, setSelectedState] = useState('NSW');
    const [checkedCinemas, setCheckedCinemas] = useState({});

    useEffect(() => {
        if (cinemas && cinemas.data) {
            setMyCinemas(cinemas.data);
        }
    }, [cinemas]);

    const filteredCinemas = myCinemas.filter(cinema => cinema.location === selectedState);

    const handleCheckboxChange = (cinemaId) => {
        setCheckedCinemas(prevCheckedCinemas => ({
            ...prevCheckedCinemas,
            [cinemaId]: !prevCheckedCinemas[cinemaId]
        }));
    };

    const handleLogCheckedCinemas = () => {
        const checkedCinemaIds = Object.keys(checkedCinemas).filter(cinemaId => checkedCinemas[cinemaId]);
        dispatch(setSelectedCinemas(checkedCinemaIds))
    };

    return (
        <div className={cinemaModal.cinemaModalIsActive && styles.modalIsActive}>
            <div className={styles.modal} style={{ transform: cinemaModal.cinemaModalIsActive ? "translateX(0%)" : "translateX(100%)" }}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h2>Select Cinemas</h2>
                        <button type="button" onClick={() =>{dispatch(setCinemaModalIsActive(false))}}>Close</button>
                    </div>
                    <ul className={styles.states}>
                        {/* State selection buttons */}
                    </ul>
                    <div className={styles.cinemasList}>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error fetching cinemas.</p>
                        ) : (
                            <ul>
                                {filteredCinemas.map(cinema => (
                                    <li key={cinema._id}>
                                     
                                        <h3>{cinema.name}</h3>   <input
                                            type="checkbox"
                                            checked={checkedCinemas[cinema._id] || false}
                                            onChange={() => handleCheckboxChange(cinema._id)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button type="button" onClick={handleLogCheckedCinemas}>Log Checked Cinemas</button>
                </div>
            </div>
        </div>
    );
};

export default CinemasModal;
