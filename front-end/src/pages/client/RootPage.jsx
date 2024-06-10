import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../../Layout/AppBar'

const RootPage = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <AppBar />
                <Outlet />
            </div>
        </>
    )
}

export default RootPage
