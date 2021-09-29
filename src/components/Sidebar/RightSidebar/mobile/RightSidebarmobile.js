import React from 'react';
//styles
import styles from './RightSidebarmobile.css';
//icons
import { HiBell } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';

function RightSidebarmobile() {
  return (
    <div className={styles.RightSidebar}>
      <header className={styles.RightHeader}>
        <div ClassName={styles.BellIcon}>
          <HiBell></HiBell>
        </div>
        <div className={styles.settingsIcon}>
          <IoSettings></IoSettings>
        </div>
        <section className={styles.adminProfile}>
          <div className={styles.adminProfilePic}>
            <img
              src='https://media.gettyimages.com/photos/portrait-teenager-picture-id846730696?k=20&m=846730696&s=612x612&w=0&h=dV17mFeCvF99EhhE49rVYlxcH9er2Ik3kr-axd1c0A8='
              alt=''
            />
          </div>
          <div className={styles.adminName}>
            <h5 style={{ margin: '5px' }}>Akinjobi Sodiq</h5>
            <p style={{ margin: '5px' }}>Admin</p>
          </div>
        </section>
      </header>

      {/* <Registered></Registered> */}
    </div>
  );
}

export default RightSidebarmobile;
