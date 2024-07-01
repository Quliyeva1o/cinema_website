import React from 'react'
import { Link } from "react-router-dom"
import { TbMovie } from "react-icons/tb";
import { IoTicketOutline } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

import styles from './index.module.scss'
const AdminAppBar = () => {
    return (
        <>
            <nav className={styles.nav}>

                <div className={styles.logo}>
                    <Link>
                        <h1>CODESCREEN</h1>
                    </Link>
                </div>
                <ul >
                    <li>
                        <Link to="add-movie">
                            <TbMovie />
                            <span >ADD MOVIE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="edit-movie">
                            <TbMovie />
                            <span >EDIT MOVIE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="add-session-times">
                            <IoTicketOutline />

                            <span >ADD SESSION TIME</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="add-cinema">
                            <BiCameraMovie />

                            <span >ADD CINEMA</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="add-event">
                            <IoCalendarOutline />

                            <span > ADD EVENT</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="add-trailer">
                            <BiCameraMovie />

                            <span > ADD TRAILER</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin">
                            <CiStar />

                            <span > DASHBOARD</span>
                        </Link>
                    </li>
                </ul>
                {/* <ul className={styles.secondUl}>
                    <li>
                        <Link to="offers">
                            <span >Offers & Promotions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="experiences">
                            <span >Experiences</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="food-and-drinks">
                            <span >Food & Drink</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://shop.hoyts.com.au/">
                           <span >Gift Shop</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="functions">
                           <span >Functions & Parties</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="accessibility">
                           <span >Accessibility</span>
                        </Link>
                    </li>
                </ul> */}

            </nav>
        </>
    )
}

export default AdminAppBar
