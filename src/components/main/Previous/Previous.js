import React, { useContext } from 'react';
//styles
import styles from './Previous.css';
//context
import ExamPageContext from '../../../Pages/Exam/ExamContext';

function Previous(props) {
  const {
    handleExamYearChange,
    prevSetHandler,

    previousLoadingStatus,
    isPrevDetailLoaded,
    prevExamSettingsDetail,
    recordNotFoundMsg,
  } = useContext(ExamPageContext);

  let loadedText = null;

  if (previousLoadingStatus) {
    loadedText = 'loading...............';
  }

  if (isPrevDetailLoaded) {
    loadedText = 'Loaded';
  }
  return (
    <div className={styles.PreviousPage}>
      <h1 className={styles.PreviousHeader}>Previous Exams</h1>
      <div className={styles.SelectExaminationBox}>
        <h1 className={styles.SelectExamText}>Select Examination Year</h1>
        <select
          name=''
          id=''
          onChange={(e) => handleExamYearChange(e.target.value)}
        >
          <option>Select Year</option>
          <option>2021</option>
          <option>2012</option>
          <option>2020</option>
        </select>
        <p>{loadedText}</p>
        <p>{recordNotFoundMsg}</p>
        <div className={styles.BtnCOn}>
          <button>Reset</button>
          {prevExamSettingsDetail !== null ? (
            <button
              onClick={() => {
                prevSetHandler();
              }}
            >
              View
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Previous;
