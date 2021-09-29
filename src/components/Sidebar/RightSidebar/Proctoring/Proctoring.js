import React from 'react';
//styles
import styles from './Proctoring.css';
//icons
import { IoIosArrowDown } from 'react-icons/io';

function Proctoring() {
  return (
    <div className={styles.ProctoringSidebar}>
      <br></br>
      <section className={styles.Preview}>
        <p>View Previous Exams</p>
        <IoIosArrowDown></IoIosArrowDown>
      </section>
      <br></br>
      <section>
        <p>Previous exams are automatically moved into the archive</p>
      </section>
    </div>
  );
}

export default Proctoring;
