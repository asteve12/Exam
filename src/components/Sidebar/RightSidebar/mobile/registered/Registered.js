import React from 'react';
//styles
import styles from './registered.css';
//data
import courses from '../../../../../Data/registeredCourses/course';

function Registered() {
  return (
    <div className={styles.registeredWrapper}>
      <header className={styles.RegisteredHeader}>
        <h4>Registration Summary</h4>
      </header>
      <br></br>
      <section className={styles.Registered}>
        {courses.map((each) => {
          return (
            <div className={styles.RegisteredCourses}>
              <div
                className={styles.NoRegistered}
                style={{ color: each.color, backgroundColor: each.background }}
              >
                {each.amount}
              </div>
              <p className={styles.RegisteredCourse}>{each.Name}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Registered;
