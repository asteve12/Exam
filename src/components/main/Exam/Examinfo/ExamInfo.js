import React from 'react';
import RightSidebarmobile from '../../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import styles from './ExamInfo.css';
//components
import Exammobile from '../../../Sidebar/RightSidebar/Exam/Mobile/Exammobile';
import ExamInfoMobileRightbar from '../../../Sidebar/RightSidebar/Exam/Examinfo/Examinfo';

function ExamInfo(props) {
  return (
    <div className={styles.ExamWrapper}>
      <RightSidebarmobile></RightSidebarmobile>
      <Exammobile></Exammobile>
      <div className={styles.mobileHeader}>
        <ExamInfoMobileRightbar></ExamInfoMobileRightbar>
      </div>

      <br></br>
      <header>
        <h1 className={styles.PageTitle}>Exam Information</h1>
      </header>
      <br></br>
      <main className={styles.ExamMain}>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Select Subject:</label>
          </div>
          <div className={styles.ExamInput}>
            <select name='' id=''>
              <option value=''></option>
              <option value=''></option>
              <option value=''></option>
              <option value=''></option>
            </select>
          </div>
        </section>
        <br></br>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Input Questions:</label>
            <br></br>
            <label className={styles.DragText}>
              Drag and drop images to add
            </label>
          </div>
          <div className={styles.ExamInputEnd}>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              draggable='false'
            ></textarea>
          </div>
        </section>
        <br></br>

        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Select Subject:</label>
          </div>
          <div className={styles.ExamInput}>
            <input
              name=''
              id=''
              placeholder='A'
              className={styles.optionA}
            ></input>
            <input
              name=''
              className={styles.optionB}
              placeholder='B'
              id=''
            ></input>
          </div>
        </section>

        <br></br>

        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Select Subject:</label>
          </div>
          <div className={styles.ExamInput}>
            <input
              name=''
              id=''
              placeholder='C'
              className={styles.optionA}
            ></input>
            <input
              name=''
              className={styles.optionB}
              placeholder='D'
              id=''
            ></input>
          </div>
        </section>

        <br></br>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Select Subject:</label>
          </div>
          <div className={styles.ExamInput}>
            <select name='' id='' className={styles.optionA}>
              <option value=''></option>
              <option value=''></option>
              <option value=''></option>
              <option value=''></option>
            </select>
          </div>
        </section>
        <br></br>
        <footer className={styles.FooterWrapper}>
          <button className={styles.ResetBtn} onClick={props.reset}>
            Reset
          </button>
          <button className={styles.SaveBtn} onClick={props.proceed}>
            Save and Proceed
          </button>
        </footer>
      </main>
    </div>
  );
}

export default ExamInfo;
