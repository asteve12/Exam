import React from 'react';
//components
import LeftSidebarItems from '../LeftSideBar/LeftSidebarItems/leftSideBarItems';
//styles
import styles from './LeftSidebar.css';
//images
import Headerimage from '../../../assets/design/leftSidebar/headerImg.svg';

function LeftSidebar() {
  return (
    <div className={styles.LeftSidebar}>
      <section className={styles.LeftSideBarImageHeader}>
        <img src={Headerimage} alt='' />
      </section>
      <br></br>
      <br></br>
      <section>
        <p className={styles.LeftSideBarMenu}>Main Menu</p>
        <br></br>
        <LeftSidebarItems></LeftSidebarItems>
      </section>
    </div>
  );
}

export default LeftSidebar;
