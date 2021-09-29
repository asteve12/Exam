import React from 'react';

//components/
import StudentCard from '../../SudentCard/StudentCard';
import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';

//data

import student from '../../../Data/studentCard/student';
//styles
import styles from './Studentdashboard.css';
//icons
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
//Components
import MobileStudentRightbar from '../../Sidebar/RightSidebar/StudentRightSidebar/StudentRightSidebar';
import ArrowButton from '../../ui/arrowButton/ArrowButton';

function StudentDashboard() {
  return (
    <div className={styles.StudentDashboardWrapper}>
      <RightSidebarmobile></RightSidebarmobile>
      <div className={styles.StudentMobileHeader}>
        <MobileStudentRightbar></MobileStudentRightbar>
      </div>

      <section className={styles.StudentDashboardHeader}>
        <h1>Students</h1>
        <select name='' id=''>
          <option>Select Course</option>
          <option></option>
          <option></option>
        </select>
      </section>
      <br></br>
      <section className={styles.StudentCardWrapper}>
        {student.map((eachItem) => {
          return <StudentCard></StudentCard>;
        })}
      </section>
      <br></br>
      <br></br>
      <br></br>

      <br></br>

      {/* <footer className={styles.DashboardFooter}>
        <button className={styles.pageBtn}>1</button>
        <p>of 7</p>
        <div className={styles.arrowsBtn}>
          <button>
            <IoIosArrowBack></IoIosArrowBack>
          </button>
          <button>
            <IoIosArrowForward></IoIosArrowForward>
          </button>
        </div>
      </footer> */}
      <ArrowButton current='1' remaining='7'></ArrowButton>
    </div>
  );
}

export default StudentDashboard;
