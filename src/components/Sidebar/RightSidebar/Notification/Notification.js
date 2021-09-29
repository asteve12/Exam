import React from 'react';
//styles
import styles from './Notification.css';
//icons
import { IoAdd } from 'react-icons/io5';

function Notification() {
  return (
    <div className={styles.StudentRight}>
      <h5>Take Action</h5>
      <br></br>
      <section className={styles.ActionImports}>
        <p>Mark all as read</p>
      </section>
      <br></br>
      <section className={styles.ActionImports}>
        <p>Mark all as unread</p>
      </section>
    </div>
  );
}

export default Notification;
