import React from 'react';
import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import MobileRightbar from '../../Sidebar/RightSidebar/Exam/Exam';

//styles
//components

import styles from './ExamSetting.css';

function Exam(props) {
  return (
    <div className={styles.ExamWrapper}>
      <RightSidebarmobile />
      <div className={styles.rightSidebarMobileCont}>
        <MobileRightbar></MobileRightbar>
        <br></br>
      </div>

      <header>
        <h1>Exam Settings</h1>
      </header>

      <br></br>
      <br></br>
      <main className={styles.ExamMain}>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Exam Instruction:</label>
          </div>
          <div className={styles.ExamInput}>
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
          <div className={styles.ExamInputSubject}>
            <div className={styles.ExamInstruct1}>
              <label htmlFor=''>
                <strong>Total Subjects:</strong>
              </label>
            </div>
            <select className={styles.ExamSelect1} name='' id=''>
              <option> &nbsp;</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>

          <div className={styles.ExamInputSubject2}>
            <div style={{ fontSize: '16px' }}>
              <label htmlFor=''>
                <strong>Questions per Subject:</strong>
              </label>
            </div>
            <select className={styles.ExamSelect2} name='' id=''>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
        </section>
        <br></br>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInputSubject}>
            <div className={styles.ExamInstruct1}>
              <label htmlFor=''>
                <strong>Exam Date:</strong>
              </label>
            </div>
            <select className={styles.ExamSelect1} name='' id=''>
              <option> &nbsp;</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>

          <div className={styles.ExamInputSubject2}>
            <div style={{ fontSize: '16px' }}>
              <label htmlFor=''>
                <strong>Student Delay Time:</strong>
              </label>
            </div>
            <select className={styles.ExamSelect2} name='' id=''>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
        </section>
        <br></br>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInputSubject}>
            <div className={styles.ExamInstruct1}>
              <label htmlFor=''>
                <strong>Randomize Questions:</strong>
              </label>
            </div>
            <select className={styles.ExamSelect1} name='' id=''>
              <option> &nbsp;</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>

          <div className={styles.ExamInputSubject2}>
            <div style={{ fontSize: '16px' }}>
              <label htmlFor=''>
                <strong>Randomize Answers:</strong>
              </label>
            </div>
            <select className={styles.ExamSelect2} name='' id=''>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
        </section>
        <br></br>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Exam Instruction:</label>
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

export default Exam;
