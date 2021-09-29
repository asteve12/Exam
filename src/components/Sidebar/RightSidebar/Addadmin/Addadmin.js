import React from 'react';
//styles
import styles from './Addadmin.css';
//icons
import { IoAdd } from 'react-icons/io5';
import { withRouter } from 'react-router-dom';

function Addadmin() {
  return (
    <div className={styles.StudentRight}>
      <h5>Take Action</h5>
      <br></br>
      <section className={styles.ActionImports}>
        <p>Add Admin</p>
        <span>
          <IoAdd></IoAdd>
        </span>
      </section>
      <br></br>
    </div>
  );
}

export default Addadmin;
