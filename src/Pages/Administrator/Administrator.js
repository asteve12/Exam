import React, { Component } from 'react';
import Main from '../../components/main/main';
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';

//styles
import styles from './Administrator.css';

class Administrator extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.AdministratorWrapper}>
        <LeftSidebar></LeftSidebar>
        <Main name='Administrator'></Main>
        <RightSidebar name='Administrator'></RightSidebar>
      </div>
    );
  }
}

export default Administrator;
