import React, { Component } from 'react';
import Main from '../../components/main/main';
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
//styles
import styles from './Notification.css';
//component

export default class Notification extends Component {
  render() {
    return (
      <div className={styles.NotificationPage}>
        <LeftSidebar></LeftSidebar>
        <Main name='Notification'></Main>
        <RightSidebar name='Notification'></RightSidebar>
      </div>
    );
  }
}
