import React, { useContext } from 'react';
import examContext from '../../../../Pages/Exam/ExamContext';
import RightSidebarmobile from '../../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import MobileRightbar from '../../../Sidebar/RightSidebar/Exam/Exam';

//styles
//components

import styles from './ExamSettingPrevious.css';

function ExamSettingsPrevious(props) {
  const { prevExamSettingsDetail, prevInfoHandler } = useContext(examContext);

  return (
    <div className={styles.ExamWrapper}>
      <RightSidebarmobile />
      <div className={styles.rightSidebarMobileCont}>
        <MobileRightbar></MobileRightbar>
        <br></br>
      </div>

      <header>
        <h1>Preview</h1>
      </header>

      <br></br>
      <br></br>
      <form className={styles.ExamMain}>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Exam Instruction:</label>
          </div>
          <div className={styles.ExamInput}>
            <textarea
              name='instruction'
              id=''
              cols='30'
              rows='10'
              draggable='false'
              value={prevExamSettingsDetail.instruction}
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
            <input
              className={styles.ExamSelect1}
              name='totalSubject'
              id=''
              type='number'
              value={prevExamSettingsDetail.totalSubject}
            ></input>
          </div>

          <div className={styles.ExamInputSubject2}>
            <div style={{ fontSize: '16px' }}>
              <label htmlFor=''>
                <strong>Questions per Subject:</strong>
              </label>
            </div>
            {/* <select className={styles.ExamSelect2} name='' id=''>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select> */}
            <input
              type='number'
              className={styles.ExamSelect2}
              min='1'
              name='questionPerSubject'
              value={prevExamSettingsDetail.questionPerSubject}
            />
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
            <input
              className={styles.ExamSelect1}
              name='examDate'
              type='date'
              id=''
              value={prevExamSettingsDetail.examDate}
            ></input>
          </div>

          <div className={styles.ExamInputSubject2}>
            <div style={{ fontSize: '16px' }}>
              <label htmlFor=''>
                <strong>Student Delay Time:</strong>
              </label>
            </div>
            <input
              className={styles.ExamSelect2}
              name='studentDelayTime'
              type='time'
              id=''
              value={prevExamSettingsDetail.studentDelayTime}
            ></input>
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
            <select
              className={styles.ExamSelect1}
              name='randomiseQuestion'
              id=''
              value={prevExamSettingsDetail.randomiseQuestion}
            >
              <option>what is your name? </option>
              <option>what is your age?</option>
              <option> what is height?</option>
              <option>what is your night?</option>
            </select>
          </div>

          <div className={styles.ExamInputSubject2}>
            <div style={{ fontSize: '16px' }}>
              <label htmlFor=''>
                <strong>Randomize Answers:</strong>
              </label>
            </div>
            <select
              className={styles.ExamSelect2}
              name='randomiseAnswers'
              id=''
              value={prevExamSettingsDetail.randomiseAnswers}
            >
              <option>fine</option>
              <option>nice</option>
              <option>good</option>
              <option>not that bad</option>
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
              name='examInstructionEnd'
              id=''
              cols='30'
              rows='10'
              draggable='false'
              value={prevExamSettingsDetail.examInstructionEnd}
            ></textarea>
          </div>
        </section>
        <br></br>
        <footer className={styles.FooterWrapper}>
          <button
            className={styles.SaveBtn}
            onClick={(e) => {
              e.preventDefault();
              prevInfoHandler();
            }}
            type='submit'
          >
            Next
          </button>
        </footer>
      </form>
    </div>
  );
}

export default ExamSettingsPrevious;
