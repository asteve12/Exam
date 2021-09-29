import React, { Component } from 'react';
//styles
import styles from './Result.css';
//components
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';

import Main from '../../components/main/main';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';

export default class Result extends Component {
  render() {
    return (
      <div className={styles.ResultPage}>
        <LeftSidebar></LeftSidebar>
        <Main name='Result'></Main>
        <RightSidebar name='Result'></RightSidebar>
      </div>
    );
  }
}
