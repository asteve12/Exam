import React, { useContext } from 'react';
//components/
import Table from './table/Table';
import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import EditTable from './table/EditTable/EditTable';
import { context } from '../../../Pages/Courses/Course';
import CourseRightbar from '../../Sidebar/RightSidebar/course/Course';

//styles
import styles from './Course.css';
import ArrowButton from '../../ui/arrowButton/ArrowButton';

function Course() {
  const editData = useContext(context);
  console.log(editData, 'hello');

  return (
    <div className={styles.CourseWrapper}>
      <h1>Courses</h1>
      <RightSidebarmobile></RightSidebarmobile>

      <div className={styles.MobileCourseHeader}>
        <CourseRightbar></CourseRightbar>
        <br></br>
      </div>

      {editData.edit ? <EditTable></EditTable> : <Table></Table>}

      <br></br>
      <br></br>
      <ArrowButton current={10} remaining={20}></ArrowButton>
      <br></br>
      <div className={styles.ResetCont}>
        <button className={styles.Reset}>Reset</button>
        <button className={styles.Save}>Save</button>
      </div>
    </div>
  );
}

export default Course;
