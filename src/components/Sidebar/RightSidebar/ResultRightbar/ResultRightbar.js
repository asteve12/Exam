import React from 'react';
//styles
import styles from './ResultRight.css';
//icons
import { IoAdd } from 'react-icons/io5';

function ResultRightbar() {
  return (
    <div className={styles.StudentRight}>
      <h5>Take Action</h5>
      <br></br>
      <section className={styles.ActionImports}>
        <p>Export</p>
        <span>
          <IoAdd></IoAdd>
        </span>
      </section>
      <br></br>
      <section className={styles.ActionImports}>
        <p>Publish</p>
        <span>
          <IoAdd></IoAdd>
        </span>
      </section>
    </div>
  );
}

export default ResultRightbar;
