import React from 'react';
//styles
import styles from './ArrowButton.css';
//icons
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const ArrowButton = (props) => {
  return (
    <>
      <footer className={styles.DashboardFooter}>
        <button className={styles.pageBtn}>{props.current}</button>
        <p>of {props.remaining}</p>
        <div className={styles.arrowsBtn}>
          <button>
            <IoIosArrowBack></IoIosArrowBack>
          </button>
          <button>
            <IoIosArrowForward></IoIosArrowForward>
          </button>
        </div>
      </footer>
    </>
  );
};
export default ArrowButton;
