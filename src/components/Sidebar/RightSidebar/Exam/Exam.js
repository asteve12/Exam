import React from 'react';
//styles
import styles from './Exam.css';
//icons
import { IoAdd } from 'react-icons/io5';

function Exam() {
  return (
    <div className={styles.ExamRightSide}>
      <br></br>
      <section className={styles.ExamWrapper}>
        <p className={styles.ExamImport}>Import Exam Instruction</p>
        <div className={styles.add}>
          <IoAdd></IoAdd>
        </div>
      </section>
      <br></br>
      <section className={styles.help}>
        <h5>Help and Hints</h5>
        <p>Hover over any item to display hint </p>
      </section>
    </div>
  );
}

export default Exam;
