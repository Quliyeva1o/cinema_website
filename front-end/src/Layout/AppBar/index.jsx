import React from 'react'
import { Link } from "react-router-dom"
import { TbMovie } from "react-icons/tb";
import { IoTicketOutline } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

import styles from './index.module.scss'
const AppBar = () => {
    return (
        <>
            <nav className={styles.nav}>

                <div className={styles.logo}>
                    <Link>
                        <h1>HOYTS</h1>
                    </Link>
                </div>
                <ul >
                    <li>
                        <Link to="movies">
                            <TbMovie />

                            <span >MOVIES</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="session-times">
                            <IoTicketOutline />

                            <span >SESSION TIMES</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="cinemas">
                            <BiCameraMovie />

                            <span >CINEMAS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="events">
                            <IoCalendarOutline />

                            <span >EVENTS & FESTIVALS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="rewards">
                            <CiStar />

                            <span >HOYTS REWARDS</span>
                        </Link>
                    </li>
                </ul>
                <ul className={styles.secondUl}>
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
                </ul>

            </nav>
        </>
    )
}

export default AppBar
