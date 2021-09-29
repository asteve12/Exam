import React from 'react';
import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import ArrowButton from '../../ui/arrowButton/ArrowButton';
//component
import Admin from './Admins/Admin';
import MobileAdminRightbar from '../../Sidebar/RightSidebar/Administrator/Administrator';

//styles
import styles from './MainAdministrator.css';

function MainAdministrator() {
  return (
    <div className={styles.AdministratorPage}>
      <h1>Admins</h1>
      <RightSidebarmobile></RightSidebarmobile>
      <br></br>
      <div className={styles.AdminMobileWrapper}>
        <MobileAdminRightbar></MobileAdminRightbar>
      </div>

      <br></br>
      <section className={styles.Admin}>
        <Admin status></Admin>
        <Admin></Admin>
        <Admin></Admin>
        <Admin notification='#EF5261'></Admin>
        <Admin notification='#EF5261' status></Admin>
        <Admin></Admin>
      </section>
      <br></br>
      <br></br>
      <ArrowButton current={1} remaining={7}></ArrowButton>
    </div>
  );
}

export default MainAdministrator;
