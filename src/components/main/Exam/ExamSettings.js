import React, { useContext } from 'react';
import examContext from '../../../Pages/Exam/ExamContext';
import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import MobileRightbar from '../../Sidebar/RightSidebar/Exam/Exam';

//styles
//components

import styles from './ExamSetting.css';

function Exam(props) {
  const examCon = useContext(examContext);

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
              onChange={(e) =>
                examCon.handleInputChange(e.target.value, e.target.name)
              }
              value={examCon.examSettings.instruction}
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
              onChange={(e) =>
                examCon.handleInputChange(e.target.value, e.target.name)
              }
              value={examCon.examSettings.totalSubject}
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
              onChange={(e) =>
                examCon.handleInputChange(e.target.value, e.target.name)
              }
              value={examCon.examSettings.questionPerSubject}
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
              onChange={(e) =>
                examCon.handleInputChange(e.target.value, e.target.name)
              }
              value={examCon.examSettings.examDate}
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
              onChange={(e) =>
                examCon.handleInputChange(e.target.value, e.target.name)
              }
              value={examCon.examSettings.studentDelayTime}
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
              onChange={(e) =>
                examCon.handleInputChange(e.target.value, e.target.name)
              }
              value={examCon.examSettings.randomiseQuestion}
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
              onChange={(e) =>
                examCon.handleInputChange(e.target.value, e.target.name)
              }
              value={examCon.examSettings.randomiseAnswers}
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
              onChange={(e) =>
                examCon.handleInputChange(e.target.value, e.target.name)
              }
              value={examCon.examSettings.examInstructionEnd}
            ></textarea>
          </div>
        </section>
        <br></br>
        <footer className={styles.FooterWrapper}>
          {examCon.validateExamSet ? (
            <button
              className={styles.SaveBtn}
              onClick={(e) => {
                e.preventDefault();
                props.proceed();
              }}
              type='submit'
            >
              Save and Proceed
            </button>
          ) : (
            <button
              className={styles.SaveBtn}
              onClick={(e) => {
                e.preventDefault();
                props.proceed();
              }}
              type='submit'
            >
              Pls fill all field
            </button>
          )}
        </footer>
      </form>
    </div>
  );
}

export default Exam;
