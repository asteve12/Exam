import React from 'react';
//styles
import styles from './commented.css';

function Commented() {
  return (
    <div className={styles.ActivityUserImgCommented}>
      <div className={styles.ActivityUserImg}>
        <img
          className={styles.activityPics}
          src='https://media.gettyimages.com/photos/portrait-teenager-picture-id846730696?k=20&m=846730696&s=612x612&w=0&h=dV17mFeCvF99EhhE49rVYlxcH9er2Ik3kr-axd1c0A8='
          alt=''
        />
      </div>
      <div className={styles.ActivityUserComment}>
        <h5 style={{ margin: '2px' }}>Lagbaja Chinedu</h5>

        <p style={{ margin: '3px' }}>added a new question to Post UTME 2021.</p>
      </div>
    </div>
  );
}

export default Commented;
