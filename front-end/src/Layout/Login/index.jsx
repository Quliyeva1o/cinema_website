import React from 'react';
import styles from './index.module.scss'
const Login = () => {
  return (
    <div className={styles.login}>
      <h2>Sign in to My Rewards</h2>
      <div className={styles.form}>
        {/* <div>
            <span>Sorry, that email or password seems to be incorrect. Please try again or <a href="https://hoyts.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer">contact us</a></span>
          </div> */}
        <div>
          <div>
            <input placeholder=" " />
            <label>Email address</label>
          </div>
        </div>
        <div>
          <div>
            <input type="password" placeholder=" " />
            <label>Password</label>
          </div>
        </div>
        <div>
          <div>
            <button type="button">Sign In</button>
          </div>
        </div>
      </div>
      <p>
        Having trouble signing in?<br />
        <button type="button">Reset Password</button> or <button type="button">Join Now</button>
      </p>
    </div>
  );
};

export default Login;
