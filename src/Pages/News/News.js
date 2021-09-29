import React, { Component } from 'react';
//styles
import styles from './News.css';
//component
import Main from '../../components/main/main';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';

export default class News extends Component {
  render() {
    return (
      <div className={styles.News}>
        <LeftSidebar></LeftSidebar>
        <Main name='News'></Main>
        <RightSidebar name='News'></RightSidebar>
      </div>
    );
  }
}
