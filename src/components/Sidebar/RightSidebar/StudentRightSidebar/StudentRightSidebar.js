import React, { useRef } from 'react';
//styles
import styles from './StudentRightSidebar.css';
//icons
import { IoAdd } from 'react-icons/io5';

function StudentRightSidebar() {
  const exportCont = useRef();
  const exportInvisible = useRef();

  const exportClickHandler = (e) => {
    exportCont.current.style.color = 'blue';

    exportInvisible.current.style.display =
      exportInvisible.current.style.display === 'none' ? 'flex' : 'none';
  };
  return (
    <div className={styles.StudentRight}>
      <h5>Take Action</h5>
      <br></br>
      <section className={styles.ActionImports}>
        <p>Import</p>
        <span>
          <IoAdd></IoAdd>
        </span>
      </section>
      <br></br>
      <section ref={exportCont} className={styles.ActionImports}>
        <p>Export</p>
        <span onClick={exportClickHandler}>
          <IoAdd></IoAdd>
        </span>
      </section>
      <br></br>
      <div ref={exportInvisible} className={styles.ExprtAmnt}>
        <section className={styles.ExportInvisible}>
          <input type='text' placeholder='Suffix' />
          <select name='' id='' className={styles.FileType}>
            <option value=''>PDF</option>
            <option value=''>fff</option>
            <option value=''></option>
          </select>

          <select name='' id='' className={styles.Pages}>
            <option value=''>Page</option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </section>
        <br></br>
        <div className={styles.NumberExport}>dhdhbjdhdjh</div>
      </div>
    </div>
  );
}

export default StudentRightSidebar;
