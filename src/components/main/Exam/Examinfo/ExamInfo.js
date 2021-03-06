import React from 'react';
import RightSidebarmobile from '../../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import styles from './ExamInfo.css';
//components
import Exammobile from '../../../Sidebar/RightSidebar/Exam/Mobile/Exammobile';
import ExamInfoMobileRightbar from '../../../Sidebar/RightSidebar/Exam/Examinfo/Examinfo';
//exampageconextData
import context from '../../../../Pages/Exam/ExamContext';
import { useContext } from 'react';

function ExamInfo(props) {
  const { handleExamInfoInput, handleSubmit, examInformation } =
    useContext(context);

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
      <form className={styles.ExamMain}>
        <section className={styles.ExamInstructions}>
          <div className={styles.ExamInstruct}>
            <label htmlFor=''>Select Subject:</label>
          </div>
          <div className={styles.ExamInput}>
            <select
              name='Subject'
              id=''
              onChange={(e) =>
                handleExamInfoInput(e.target.value, e.target.name)
              }
              value={examInformation.Subject}
            >
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
              onChange={(e) =>
                handleExamInfoInput(e.target.value, e.target.name)
              }
              value={examInformation.Questions}
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
              onChange={(e) =>
                handleExamInfoInput(e.target.value, e.target.name)
              }
              value={examInformation.firstAnswer}
            ></input>
            <input
              name='secondAnswer'
              className={styles.optionB}
              placeholder='B'
              id=''
              onChange={(e) =>
                handleExamInfoInput(e.target.value, e.target.name)
              }
              value={examInformation.secondAnswer}
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
              onChange={(e) =>
                handleExamInfoInput(e.target.value, e.target.name)
              }
              value={examInformation.thirdAnswer}
            ></input>
            <input
              name='fourthAnswer'
              className={styles.optionB}
              placeholder='D'
              id=''
              onChange={(e) =>
                handleExamInfoInput(e.target.value, e.target.name)
              }
              value={examInformation.fourthAnswer}
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
              onChange={(e) =>
                handleExamInfoInput(e.target.value, e.target.name)
              }
              value={examInformation.correctOption}
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
              handleSubmit(e);
            }}
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default ExamInfo;
