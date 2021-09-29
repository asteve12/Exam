import React from 'react';
//icons
import { IoAdd } from 'react-icons/io5';
//styles
import styles from './SettingRightbar.css';

function SettingRightbar() {
  return (
    <div className={styles.StudentRight}>
      <h5>Take Action</h5>
      <br></br>
      <section className={styles.ActionImports}>
        <p>Upload Profile Picture</p>
        <span>
          <IoAdd></IoAdd>
        </span>
      </section>
    </div>
  );
}

export default SettingRightbar;
