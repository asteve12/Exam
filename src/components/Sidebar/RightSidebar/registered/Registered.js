import React from 'react';

//styles
import styles from './Registered.css';
//data
import courses from '../../../../Data/registeredCourses/course';

function Registered() {
  return (
    <section className={styles.Registered}>
      <header className={styles.RegisteredHeader}>
        <br></br>
        <h4>Registration Summary</h4>
      </header>
      <br></br>
      {courses.map((each) => {
        return (
          <div className={styles.RegisteredCourses}>
            <div
              className={styles.NoRegistered}
              style={{ color: each.color, backgroundColor: each.background }}
            >
              <strong>{each.amount}</strong>
            </div>
            <p className={styles.RegisteredCourse}>{each.Name}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Registered;
