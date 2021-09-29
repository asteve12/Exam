import React from 'react';
//styles
import styles from './ResultTable.css';

function ResultTable() {
  return (
    <div className={styles.ResultTableWrapper}>
      <table className={styles.ResultTable}>
        <tr className={styles.ResTableRw}>
          <th className={styles.ResSerial}>S/N</th>
          <th className={styles.ResPhoto}>Photo</th>
          <th className={styles.ResName}>Name</th>
          <th className={styles.ResRegNo}>UTME Reg no.</th>
          <th className={styles.ResCourse}>Course Applied for</th>
          <th className={styles.ResScore}>Score</th>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>1</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>2</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>3</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>4</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>5</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>6</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>7</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>8</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>9</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
        <br></br>
        <tr className={styles.contentRow}>
          <td className={styles.ResSerial}>10</td>
          <td className={styles.ResPhoto}>
            <div className={styles.StudentPhoto}>
              <img
                src='https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='
                alt=''
              />
            </div>
          </td>
          <td className={styles.ResName}>Lagbaja Chinedu</td>
          <td className={styles.ResRegNo}>1032705679GH</td>
          <td className={styles.ResCourse}>Medicine</td>
          <td className={styles.ResScore}>300 (75%)</td>
        </tr>
      </table>
    </div>
  );
}

export default ResultTable;
