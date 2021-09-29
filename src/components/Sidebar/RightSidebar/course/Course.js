import React, { useContext, useRef } from 'react';
import { context } from '../../../../Pages/Courses/Course';
//styles
import styles from './Course.css';
//icons
import { IoAdd } from 'react-icons/io5';

function Course() {
  const editData = useContext(context);
  const changeSubCombo = useRef();

  const editSubjectComboHandler = (e) => {
    editData.handleEdit();

    changeSubCombo.current.style.color = '#0052A8';
  };
  return (
    <div>
      <br></br>
      <h5>Take Action</h5>
      <br></br>
      <section className={styles.Template}>
        <div className={styles.TemplateItem}>
          <p>Get Template</p>
          <span>
            <IoAdd className={styles.addIcon}></IoAdd>
          </span>
        </div>
        <br></br>
        <div className={styles.TemplateItem}>
          <p>Import Course List</p>
          <span>
            <IoAdd className={styles.addIcon}></IoAdd>
          </span>
        </div>
        <br></br>
        <div className={styles.TemplateItem} ref={changeSubCombo}>
          <p>Edit Subject Combination</p>
          <IoAdd
            className={styles.addIcon}
            onClick={editSubjectComboHandler}
          ></IoAdd>
        </div>
        <br></br>
        <div className={styles.TemplateItem}>
          <p>Export</p>
        </div>
      </section>
    </div>
  );
}

export default Course;
