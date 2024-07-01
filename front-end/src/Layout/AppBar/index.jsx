import React from 'react'
import { Link } from "react-router-dom"
import { TbMovie } from "react-icons/tb";
import { IoTicketOutline } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import CloseIcon from '@mui/icons-material/Close';
import styles from './index.module.scss'
import { useSelector } from 'react-redux';
const AppBar = ({ menu, setMenu }) => {
    const user = useSelector((state) => state.user);


    return (
        <>
            <nav className={menu ? `${styles.navactive}` : `${styles.nav}`}>

                <div style={{ position: "fixed" }}>
                    <div className={styles.logo}>
                        <Link>
                            <img src="http://localhost:5050/uploads/code.png" alt="" />
                        </Link>
                    </div>
                    <div className={styles.close}>
                        <CloseIcon onClick={() => { setMenu(!menu) }} />
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
                    
                        {user.id != null && <li>
                            <Link to="tickets">
                                <CiStar />

                                <span >TICKETS</span>
                            </Link>
                        </li>}
                    </ul>
                    <ul className={styles.secondUl}>
                        <li>
                            <Link to="https://www.hoyts.com.au/offers">
                                <span >Offers & Promotions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
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
                            <Link to="https://www.hoyts.com.au/accessibility">
                                <span >Functions & Parties</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="accessibility">
                                <span >Accessibility</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default AppBar
