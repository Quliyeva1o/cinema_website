import React from 'react'
import styles from './index.module.scss'
import Login from '../Login'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginIsActive, setLoginIsActive } from '../../redux/LoginActiveBtnSlice';
const LoginRegister = () => {
  const loginIsActive = useSelector(selectLoginIsActive);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setLoginIsActive(!loginIsActive));
  }
  return (
    <>
      <div className={styles.modall}>
        <div className={styles.modal}>
          <div>
            <button className={styles.close} onClick={handleClose}>
              <CloseIcon />
            </button>
            <h1>hoyts</h1>
            <div>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginRegister
