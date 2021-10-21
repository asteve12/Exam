import React, { useContext } from 'react';
import RightSidebarmobile from '../../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import styles from './ExamInfoPrevious.css';
//components
import Exammobile from '../../../Sidebar/RightSidebar/Exam/Mobile/Exammobile';
import ExamInfoMobileRightbar from '../../../Sidebar/RightSidebar/Exam/Examinfo/Examinfo';
//exampageconextData
import context from '../../../../Pages/Exam/ExamContext';

function ExamInfoPrevious(props) {
  const { prevExamInfoDetail } = useContext(context);

  return (
    <div className={styles.ExamWrapper}>
      <RightSidebarmobile></RightSidebarmobile>
      <Exammobile></Exammobile>
      <div className={styles.mobileHeader}>
        <ExamInfoMobileRightbar></ExamInfoMobileRightbar>
      </div>

      <br></br>
      <header>
        <h1 className={styles.PageTitle}>Previous Exam Information</h1>
      </header>
      <br></br>
      <form className={styles.ExamMain}>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Select Subject:</label>
          </div>
          <div className={styles.ExamInput}>
            <select name='Subject' id='' value={prevExamInfoDetail.Subject}>
              <option></option>
              <option>Maths</option>
              <option>English</option>
              <option>Biology</option>
              <option>Yoruba</option>
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
              name='Questions'
              id=''
              cols='30'
              rows='10'
              draggable='false'
              value={prevExamInfoDetail.Questions}
            ></textarea>
          </div>
        </section>
        <br></br>

        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Input Answers:</label>
          </div>
          <div className={styles.ExamInput}>
            <input
              name='firstAnswer'
              id=''
              placeholder='A'
              className={styles.optionA}
              value={prevExamInfoDetail.firstAnswer}
            ></input>
            <input
              name='secondAnswer'
              className={styles.optionB}
              placeholder='B'
              id=''
              value={prevExamInfoDetail.secondAnswer}
            ></input>
          </div>
        </section>

        <br></br>

        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''></label>
          </div>
          <div className={styles.ExamInput}>
            <input
              name='thirdAnswer'
              id=''
              placeholder='C'
              className={styles.optionA}
              value={prevExamInfoDetail.thirdAnswer}
            ></input>
            <input
              name='fourthAnswer'
              className={styles.optionB}
              placeholder='D'
              id=''
              value={prevExamInfoDetail.fourthAnswer}
            ></input>
          </div>
        </section>

        <br></br>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Correct Option:</label>
          </div>
          <div className={styles.ExamInput}>
            <select
              name='correctOption'
              id=''
              className={styles.optionA}
              value={prevExamInfoDetail.correctOption}
            >
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>c</option>
            </select>
          </div>
        </section>
        <br></br>
        <footer className={styles.FooterWrapper}>
          <button className={styles.ResetBtn} onClick={props.reset}>
            Reset
          </button>
          <button
            className={styles.SaveBtn}
            type='submit'
            onClick={(e) => {
              props.proceed();
            }}
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default ExamInfoPrevious;
