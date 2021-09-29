import React from 'react';
//styles
import styles from './StudentCard.css';
function StudentCard(props) {
  return (
    <section className={styles.StudentCardContainer}>
      <div className={styles.ImageWrapper}>
        <img
          src='data:image/jpeg;base64,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'
          alt=''
        />
        <span className={styles.LoginStatus}></span>
      </div>
      <br></br>
      <p className={styles.StudentName}>
        <strong>Lagbaja Chinedu</strong>
      </p>
      <br></br>
      <div className={styles.MatricNo}>
        <div>1032705679GH</div>
        <div>Medicine</div>
      </div>
    </section>
  );
}

export default StudentCard;
