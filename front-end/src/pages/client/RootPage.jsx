import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../../Layout/AppBar';
import Header from '../../Layout/SearchBar';
import { selectLoginIsActive } from '../../redux/LoginActiveBtnSlice';
import LoginRegister from '../../Layout/LoginRegister';
import styles from "./index.module.scss"
import { useSelector } from 'react-redux';
import Chat from '../../Layout/Chat';
const RootPage = () => {
    const loginIsActive = useSelector(selectLoginIsActive);

    return (
        <>
           <div style={{position:'relative',overflow:"hidden"}}>
           <div style={{ display: "flex" }}>
                <AppBar className={styles.appbar}/>
                <div style={{ width: "calc(100% - 272px)" }}>
                    <Header />
                    <Outlet />
                </div>

            </div> <div className={loginIsActive && styles.log} >
                {loginIsActive && <LoginRegister />}
            </div>
            <div className={styles.chat}>
                <Chat/>
            </div>
           </div>
            </>
    );
};

export default RootPage;
