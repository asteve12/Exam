import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './RightSideBar.css';
//icons
import { HiBell } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';
//components
import Registered from './registered/Registered';
import Exam from './Exam/Exam';
import Examinfo from './Exam/Examinfo/Examinfo';
import StudentRightSidebar from './StudentRightSidebar/StudentRightSidebar';
import Course from './course/Course';
import AdministratorRightbar from './Administrator/Administrator';
import Addadmin from './Addadmin/Addadmin';
import Proctoring from './Proctoring/Proctoring';
import NewsRightbar from './Newsrightsidebar/NewsRightbar';
import ResultRightbar from './ResultRightbar/ResultRightbar';
import SettingRightbar from './Settings/SettingRightbar';
import Notification from './Notification/Notification';

function RightSidebar(props) {
  return (
    <div className={styles.RightSidebar}>
      <header className={styles.RightHeader}>
        <Link to='/notification'>
          <div ClassName={styles.BellIcon}>
            <HiBell></HiBell>
          </div>
        </Link>
        <Link to='/setting'>
          <div className={styles.settingsIcon}>
            <IoSettings></IoSettings>
          </div>
        </Link>
      </header>
      <br></br>
      <br></br>
      <section className={styles.adminProfile}>
        <div className={styles.adminProfilePic}>
          <img
            src='https://media.gettyimages.com/photos/portrait-teenager-picture-id846730696?k=20&m=846730696&s=612x612&w=0&h=dV17mFeCvF99EhhE49rVYlxcH9er2Ik3kr-axd1c0A8='
            alt=''
          />
        </div>
        <div className={styles.adminName}>
          <h5 style={{ margin: '5px' }}>Akinjobi Sodiq</h5>
          <p style={{ margin: '5px' }}>Admin</p>
        </div>
      </section>

      {props.name === 'Dashboard' ? <Registered></Registered> : null}
      {props.name === 'Exam' ? <Exam></Exam> : null}
      {props.name === 'Examinfo' ? <Examinfo></Examinfo> : null}
      {props.name === 'Student' ? (
        <StudentRightSidebar></StudentRightSidebar>
      ) : null}
      {props.name === 'Course' ? <Course></Course> : null}
      {props.name === 'Administrator' ? (
        <AdministratorRightbar></AdministratorRightbar>
      ) : null}
      {props.name === 'Proctoring' ? <Proctoring></Proctoring> : null}
      {props.name === 'News' ? <NewsRightbar></NewsRightbar> : null}
      {props.name === 'Result' ? <ResultRightbar></ResultRightbar> : null}
      {props.name === 'Setting' ? <SettingRightbar></SettingRightbar> : null}
      {props.name === 'Notification' ? <Notification></Notification> : null}
    </div>
  );
}

export default RightSidebar;
