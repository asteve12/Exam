import React from 'react';
import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
//styles
import styles from './Notification.css';

import Notiy from '../../Sidebar/RightSidebar/Notification/Notification';

function Notification() {
  return (
    <div>
      <h1>Notifications</h1>
      <br />
      <RightSidebarmobile></RightSidebarmobile>
      <div className={styles.NotifyCont}>
        <Notiy></Notiy>
      </div>
      <br></br>

      <section className={styles.Notify}>
        <div className={styles.headerText}>
          <h5>Lagbaja Chinedu</h5> &nbsp;
          <p>added a new question to Post UTME 2021</p>
        </div>

        <div className={styles.notificationComment}>
          <p>
            <strong>Lagbaja Chinedu </strong>commented “Nice work”.
          </p>
          <p>
            <strong>Lagbaja Chinedu </strong>commented “Nice work”.
          </p>
          <p>
            <strong>Lagbaja Chinedu </strong>commented “Nice work”.
          </p>
          <p>
            <strong>Lagbaja Chinedu </strong>commented “Nice work”.
          </p>
        </div>
      </section>

      <section className={styles.illumino}>
        <p>Illumino made a feature upgrade. You can now view previous exams.</p>
      </section>

      <section className={styles.Notify}>
        <div className={styles.headerText}>
          <h5>Lagbaja Chinedu</h5> &nbsp;
          <p>added a new question to Post UTME 2021</p>
        </div>

        <div className={styles.notificationComment}>
          <p>
            <strong>Lagbaja Chinedu </strong>commented “Nice work”.
          </p>
          <p>
            <strong>Lagbaja Chinedu </strong>commented “Nice work”.
          </p>
          <p>
            <strong>Lagbaja Chinedu </strong>commented “Nice work”.
          </p>
          <p>
            <strong>Lagbaja Chinedu </strong>commented “Nice work”.
          </p>
        </div>
      </section>

      <section className={styles.illumino}>
        <p>Illumino made a feature upgrade. You can now view previous exams.</p>
      </section>

      <footer className={styles.notifyFooter}></footer>
    </div>
  );
}

export default Notification;
