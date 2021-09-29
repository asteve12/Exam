import React, { Component } from 'react';
import Main from '../../components/main/main';
import LeftSideBarItems from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
//styles
import styles from './Addadmin.css';

export default class Addadmin extends Component {
  render() {
    return (
      <div className={styles.AddadminPage}>
        <LeftSideBarItems></LeftSideBarItems>
        <Main name='AddAdmin'></Main>
        <RightSidebar name='AddAdmin'></RightSidebar>
      </div>
    );
  }
}
