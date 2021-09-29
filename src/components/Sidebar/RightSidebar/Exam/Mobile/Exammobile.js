import styles from './Exammobile.css';

//data
import Questions from '../../../../../Data/Exam/availableQuest';

function Registered() {
  return (
    <div className={styles.registeredWrapper}>
      <header className={styles.RegisteredHeader}>
        <h4>Available Question</h4>
      </header>
      <section className={styles.Registered}>
        {Questions.map((each) => {
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
