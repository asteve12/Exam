import React from 'react';
import styles from './Login.css';
import Background from '../../assets/design/background.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className={styles.LoginContainer}>
      <section>
        <div className={styles.LoginText}>
          <h5>
            Login to Admin Acc
            <span className={styles.oWrapper}>o</span>unt
          </h5>
          <span>
            <img src='' alt='' />
          </span>
        </div>
        <div className={styles.LoginInputContainer}>
          <input type='text' placeholder='Email Address' />
          <br></br>
          <br></br>
          <input type='text' placeholder='Password' />
        </div>
        <br></br>
        <br></br>
        <div className={styles.LoginButtonContainer}>
          <Link to='/dashboard'>
            <button className={styles.LoginButton}>LOGIN</button>
          </Link>
        </div>
        <br></br>
        <div className={styles.DesignContainer}>
          <img src={Background} alt='' />
        </div>
      </section>
    </div>
  );
}

export default Login;
