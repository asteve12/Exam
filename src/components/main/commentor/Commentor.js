import React from 'react';
//styles
import styles from './Commentor.css';
//component
import Commented from './commented/commented';

//icons
import commentIcon from '../../../assets/design/main/commentIcon.svg';

function Commentor() {
  return (
    <div className={styles.ActivityUserSection}>
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

        <div className={styles.inputComment}>
          <div className={styles.inputCommentIcon}>
            <img src={commentIcon} alt='' />
          </div>
          &nbsp; &nbsp;
          <input
            className={styles.inputCommentBox}
            placeholder='Add a comment'
            type='text'
          />
          {/*commentor section*/}
        </div>
        <section>
          <Commented></Commented>
        </section>
      </div>
    </div>
  );
}

export default Commentor;
