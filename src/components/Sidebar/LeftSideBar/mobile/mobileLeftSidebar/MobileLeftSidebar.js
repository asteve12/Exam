import React from 'react';
//styles
import styles from './MobileLeftSidebar.css';
//components
import LeftSidebarItesms from '../../LeftSidebarItems/leftSideBarItems';

function MobileLeftSidebar() {
  return (
    <div className={styles.LeftSidebar}>
      <br></br>
      <br></br>
      <section>
        <p className={styles.LeftSideBarMenu}>Main Menu</p>
        <br></br>
        <LeftSidebarItesms></LeftSidebarItesms>
      </section>
    </div>
  );
}

export default MobileLeftSidebar;
