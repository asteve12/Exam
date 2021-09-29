import React from 'react';
//icons
import registeredCourse from '../../../assets/design/main/registeredLogo.svg';
import courseOffered from '../../../assets/design/main/totalCourse.svg';
import { FiMoreVertical } from 'react-icons/fi';
import Commentor from '../commentor/Commentor';
// styles
import styles from './Dashboard.css';
import Registered from '../../Sidebar/RightSidebar/mobile/registered/Registered';

import RightSidebarmobile from '../../Sidebar/RightSidebar/mobile/RightSidebarmobile';

function Dashboard() {
  return (
    <div className={styles.DashboardContainer}>
      <section>
        <h3 className={styles.PageTitle}>Dashboard</h3>
      </section>
      <br></br>
      <RightSidebarmobile></RightSidebarmobile>
      <Registered></Registered>

      <section className={styles.studentCard}>
        <div className={styles.registeredStudentCard}>
          <div className={styles.registeredLogo}>
            <img src={registeredCourse} alt='' />
          </div>
          <div className={styles.registeredText}>
            <h5>Total Registered Students</h5>

            <p className={styles.Number}>
              <strong>123,569</strong> <hr />
            </p>

            <p className={styles.registered}>
              1526 registered in the last 7 days
            </p>
          </div>
        </div>
        <div className={styles.totalregisteredCourseCard}>
          <div className={styles.totalCourseLogo}>
            <img src={courseOffered} alt='' />
          </div>
          <div className={styles.courseText}>
            <h5>Total Registered Students</h5>
            <p className={styles.Number}>
              <strong>125</strong>
              <hr></hr>
            </p>
            <p className={styles.registered}>
              1526 registered in the last 7 days
            </p>
          </div>
        </div>
      </section>
      <br></br>
      <section className={styles.activityFeed}>
        <header className={styles.activityHeader}>
          <p className={styles.activityText}>
            <strong>Activity Feed</strong>
          </p>
          <FiMoreVertical></FiMoreVertical>
        </header>
        <Commentor></Commentor>
        <Commentor></Commentor>
        <br></br>
      </section>
      <div className={styles.LatestResult}>
        <h1>Latest Results</h1>
      </div>
    </div>
  );
}

export default Dashboard;
