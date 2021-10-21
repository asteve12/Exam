import React from 'react';
//styles
import styles from './Examinfo.css';
//Data
import Question from '../../../../../Data/Exam/availableQuest';
//icons
import { IoAdd } from 'react-icons/io5';

function Examinfo(props) {
  return (
    <section className={styles.Registered}>
      <div className={styles.ExamWrapper}>
        <br></br>
        <header className={styles.RegisteredHeader}>
          <h4>Available Questions</h4>
        </header>
        <br></br>

        {Question.map((each) => {
          return (
            <div className={styles.RegisteredCourses}>
              <div
                className={styles.NoRegistered}
                style={{ color: each.color, backgroundColor: each.background }}
              >
                {each.amount}
              </div>
              <p className={styles.RegisteredCourse}>{each.Name}</p>
            </div>
          );
        })}
      </div>

      <section className={styles.Template}>
        <br></br>
        <div className={styles.TemplateItem}>
          <p>Get Template</p>
          <span>
            <IoAdd className={styles.addIcon}></IoAdd>
          </span>
        </div>
        <br></br>
        <div className={styles.TemplateItem}>
          <p>Import</p>
          <span>
            <IoAdd className={styles.addIcon}></IoAdd>
          </span>
        </div>
        <br></br>
        <div className={styles.TemplateItem}>
          <p>Preview</p>
        </div>
        <br></br>
        <div className={styles.TemplateItem}>
          <p>Publish</p>
        </div>
        <br></br>
        <div onClick={props.previousBtn} className={styles.TemplateItem}>
          <p>Previous</p>
        </div>
        <br></br>
      </section>
    </section>
  );
}

export default Examinfo;
