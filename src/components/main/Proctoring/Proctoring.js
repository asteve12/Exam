import React from 'react';
//styles
import styles from './Proctoring.css';

function Proctoring() {
  return (
    <div className={styles.Proctoring}>
      <h1>Web Proctoring</h1>
      <br></br>
      <p>
        No exam has been taken yet. When an exam has been taken, the proctored
        videos will appear here
      </p>
    </div>
  );
}

export default Proctoring;
