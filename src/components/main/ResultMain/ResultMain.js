import React from 'react';
import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';
import ArrowButton from '../../ui/arrowButton/ArrowButton';
//styles
import styles from './ResultMain.css';
import ResultTable from './ResultTable/ResultTable';
import ResultRightbar from '../../Sidebar/RightSidebar/ResultRightbar/ResultRightbar';

function ResultMain() {
  return (
    <div className={styles.ResultMain}>
      <section className={styles.ResultHeader}>
        <h1>Result</h1>
        <br></br>

        <select name='' id=''>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
        </select>
      </section>
      <br></br>
      <RightSidebarmobile></RightSidebarmobile>
      <div className={styles.MobileHeaderCont}>
        <ResultRightbar></ResultRightbar>
      </div>

      <br></br>
      <ResultTable></ResultTable>
      <br></br>
      <ArrowButton current={5681} remaining={5687}></ArrowButton>
    </div>
  );
}

export default ResultMain;
