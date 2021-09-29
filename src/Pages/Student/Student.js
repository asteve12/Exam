import React, { Component } from 'react';
// Components
import Main from '../../components/main/main';
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
//styles
import styles from './Student.css';

class Student extends Component {
  render() {
    return (
      <div className={styles.StudentWrapper}>
        <LeftSidebar></LeftSidebar>
        <Main name='Student'></Main>
        <RightSidebar name='Student'></RightSidebar>
      </div>
    );
  }
}

export default Student;
