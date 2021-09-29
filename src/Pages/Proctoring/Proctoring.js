import React, { Component } from 'react';
import Main from '../../components/main/main';
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
//styles
import styles from './Proctoring.css';

export class Proctoring extends Component {
  render() {
    return (
      <div className={styles.ProctoringPage}>
        <LeftSidebar></LeftSidebar>
        <Main name='Proctoring'></Main>
        <RightSidebar name='Proctoring'></RightSidebar>
      </div>
    );
  }
}

export default Proctoring;
