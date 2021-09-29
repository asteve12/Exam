import React from 'react';
//styles
import styles from './EditTable.css';

function Table() {
  return (
    <div className={styles.TableWrapper}>
      <table className={styles.Table}>
        <tr className={styles.TableHead}>
          <th className={styles.SerialNo}>S/N</th>
          <th className={styles.CourseName}>Course Name</th>
          <th className={styles.Code}>Course Short Code</th>
          <th className={styles.Subject}>Subject Combination</th>
        </tr>

        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>1</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            {/* English Language, Mathematics, Chemistry, Biology */}
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>English</option>
              <option value=''>Math</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Mathematics</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Chemistry</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Biology</option>
            </select>
          </td>
        </tr>

        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>2</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            {/* English Language, Mathematics, Chemistry, Biology */}
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>English</option>
              <option value=''>Math</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Mathematics</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Chemistry</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Biology</option>
            </select>
          </td>
        </tr>

        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>3</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            {/* English Language, Mathematics, Chemistry, Biology */}
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>English</option>
              <option value=''>Math</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Mathematics</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Chemistry</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Biology</option>
            </select>
          </td>
        </tr>

        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>4</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            {/* English Language, Mathematics, Chemistry, Biology */}
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>English</option>
              <option value=''>Math</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Mathematics</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Chemistry</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Biology</option>
            </select>
          </td>
        </tr>

        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>5</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            {/* English Language, Mathematics, Chemistry, Biology */}
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>English</option>
              <option value=''>Math</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Mathematics</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Chemistry</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Biology</option>
            </select>
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>6</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            {/* English Language, Mathematics, Chemistry, Biology */}
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>English</option>
              <option value=''>Math</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Mathematics</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Chemistry</option>
            </select>
            <select name='' id='' className={styles.SelectCourse}>
              <option value=''>Biology</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
