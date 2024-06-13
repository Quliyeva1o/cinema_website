import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../../Layout/AppBar'

const RootPage = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <AppBar style={
                    {
                        position: "sticky",
                        top: "0",
                        alignSelf: "flex-start",
                        flexShrink: "0",
                        width: "272px",
                        paddingTop: "32px",
                        paddingLeft: "32px",
                        paddingBottom: " 32px",
                        boxSizing: "border-box"
                    }
                } />
                <div style={{
                    width: "calc(100% - 272px)"
                }} >
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default RootPage
