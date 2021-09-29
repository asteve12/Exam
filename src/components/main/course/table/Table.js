import React from 'react';
//styles
import styles from './Table.css';

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
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>2</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>3</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>4</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>5</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>6</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>7</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>8</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
        <tr className={styles.Tabledata}>
          <td className={styles.SerialNo}>9</td>
          <td className={styles.CourseName}>Medicine</td>
          <td className={styles.Code}>MED</td>
          <td className={styles.Subject}>
            English Language, Mathematics, Chemistry, Biology
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
