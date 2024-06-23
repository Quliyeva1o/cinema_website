import React, { useEffect, useState } from 'react'
import { useGetEventByIdQuery } from '../../../redux/EventsSlice';
import { useParams } from 'react-router-dom';
import styles from './index.module.scss'
const EventDetail = () => {
    const { id } = useParams();
    const [myEvent, setMyEvent] = useState([])
    const { data: event } = useGetEventByIdQuery(id);
    useEffect(() => {
        if (event) {
            setMyEvent(event.data)
        }
    }, [event])


    return (

        <>
            <div className={styles.hero}>

                <img src={myEvent.img} alt={myEvent.title} />
                <div className={styles.heading}>
                    <h2>
                        {myEvent.title}
                    </h2>
                    <span>

                    </span>
                </div>
            </div>
            <div>
                <div className={styles.event}>
                    <h2>Description</h2>
                    <p>
                        {myEvent.desc}
                    </p>
                </div>
            </div></>
    )
}

export default EventDetail
