import React from 'react';
//styles
import styles from './NewsRightbar.css';
//Data'
import availableProject from '../../../../Data/News/News';

function NewsRightbar() {
  return (
    <section className={styles.News}>
      <br></br>
      <header className={styles.NewsHeader}>
        <h5>Available Recipients</h5>
      </header>
      <br></br>
      {availableProject.map((each) => {
        return (
          <div className={styles.NewsCourses}>
            <div
              className={styles.NoNews}
              style={{ color: each.color, backgroundColor: each.background }}
            >
              {each.amount}
            </div>
            <p className={styles.NewsCourse}>{each.name}</p>
          </div>
        );
      })}
    </section>
  );
}

export default NewsRightbar;
