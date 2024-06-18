import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminAppBar from '../../Layout/Admin/AdminAppBar'
import styles from './index.module.scss'
const AdminRoot = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminAppBar className={styles.appbar} />
        <div style={{ width: "calc(100% - 272px)" }}>
          {/* <Header /> */}
          <Outlet />
        </div>

      </div>
      {/* <div className={loginIsActive && styles.log} >
        {loginIsActive && <LoginRegister />}
      </div> */}
      </>
  )
}

export default AdminRoot
