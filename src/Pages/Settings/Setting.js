import React, { Component } from 'react';
import Main from '../../components/main/main';
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
//styles
import styles from './Setting.css';
//component

export default class Setting extends Component {
  render() {
    return (
      <div className={styles.SettingPage}>
        <LeftSidebar></LeftSidebar>
        <Main name='Setting'></Main>
        <RightSidebar name='Setting'></RightSidebar>
      </div>
    );
  }
}
