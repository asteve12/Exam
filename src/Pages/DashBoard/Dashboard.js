import React from 'react';
//components
import Main from '../../components/main/main';
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
//styles
import styles from './Dashboard.css';

function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <LeftSidebar></LeftSidebar>
      <Main name='Dashboard'></Main>
      <RightSidebar name='Dashboard'></RightSidebar>
    </div>
  );
}

export default Dashboard;
