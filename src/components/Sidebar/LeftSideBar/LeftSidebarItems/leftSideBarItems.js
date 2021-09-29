import React, { useState, useRef } from 'react';
//styles
import styles from './LeftSidebarItems.css';
//icons
import DashboardIcons from '../../../../assets/design/leftSidebar/dashboardIcons';
import ExamIcons from '../../../../assets/design/leftSidebar/Exam';
import StudentIcon from '../../../../assets/design/leftSidebar/StudentIcon';
import CoursesIcons from '../../../../assets/design/leftSidebar/CoursesIcons';
import AdministratorIcon from '../../../../assets/design/leftSidebar/Administrator';
import WebProctoringIcons from '../../../../assets/design/leftSidebar/WebProctoring';
import NewsIcon from '../../../../assets/design/leftSidebar/NewsIcon';
import ResultIcon from '../../../../assets/design/leftSidebar/ResultIcon';
import { withRouter } from 'react-router-dom';
//components/
import { NavLink } from 'react-router-dom';

function LeftSideBarItems(props) {
  console.log(props, 'items list');
  const [clicked, setClicked] = useState(null);
  const wrapper = useRef();
  const menuItemClickHandler = (e) => {
    if (clicked) {
      const previousClicked = wrapper.current.children;

      [...previousClicked]
        .filter((e) => e.id === clicked)
        .map((e) => {
          e.style.border = 'none';
          e.style.color = 'black';
          return null;
        });

      e.currentTarget.style.borderLeft = 'solid 3px #0052a8';
      e.currentTarget.style.color = '#0052a8';
      setClicked(e.currentTarget.id);
    } else {
      e.currentTarget.style.borderLeft = 'solid 3px #0052a8';
      setClicked(e.currentTarget.id);
    }
  };
  return (
    <div
      className={styles.LeftSidebarItems}
      id='LeftSideBarItems'
      ref={wrapper}
    >
      <NavLink
        to={{ pathname: '/dashboard' }}
        onClick={(e) => menuItemClickHandler(e)}
        activeClassName={styles.activeItems}
      >
        <div
          className={styles.LeftSideBarWrapper}
          id='LeftSideBarWrapper'
          activeItems
        >
          <div className={styles.iconContainer} style={{ color: 'white' }}>
            <DashboardIcons
              fill={
                props.location.pathname === '/dashboard' ? '#0052a8' : 'grey'
              }
            ></DashboardIcons>
          </div>

          <div className={styles.menuText}>Dashboard</div>
        </div>
      </NavLink>
      <br></br>
      <NavLink to='/exam' activeClassName={styles.activeItems}>
        <div
          className={styles.LeftSideBarWrapper}
          id='LeftSideBarWrapper1'
          onClick={(e) => menuItemClickHandler(e)}
        >
          <div className={styles.iconContainer} style={{ color: 'white' }}>
            <ExamIcons
              fill={props.location.pathname === '/exam' ? '#0052a8' : 'grey'}
            ></ExamIcons>
          </div>

          <div className={styles.menuText}>Exams</div>
        </div>
      </NavLink>
      <br></br>
      <NavLink to='/student' activeClassName={styles.activeItems}>
        <div
          className={styles.LeftSideBarWrapper}
          id='LeftSideBarWrapper2'
          onClick={(e) => menuItemClickHandler(e)}
        >
          <div className={styles.iconContainer} style={{ color: 'white' }}>
            <StudentIcon
              fill={props.location.pathname === '/student' ? '#0052a8' : 'grey'}
            ></StudentIcon>
          </div>
          <div className={styles.menuText}>Students</div>
        </div>
      </NavLink>
      <br></br>
      <NavLink to='/course' activeClassName={styles.activeItems}>
        <div
          className={styles.LeftSideBarWrapper}
          id='LeftSideBarWrapper3'
          onClick={(e) => menuItemClickHandler(e)}
        >
          <div className={styles.iconContainer} style={{ color: 'white' }}>
            <CoursesIcons
              fill={props.location.pathname === '/course' ? '#0052a8' : 'grey'}
            ></CoursesIcons>
          </div>
          <div className={styles.menuText}>Courses</div>
        </div>
      </NavLink>
      <br></br>

      <NavLink to='/administrator' activeClassName={styles.activeItems}>
        <div
          className={styles.LeftSideBarWrapper}
          id='LeftSideBarWrapper4'
          onClick={(e) => menuItemClickHandler(e)}
        >
          <div className={styles.iconContainer} style={{ color: 'white' }}>
            <AdministratorIcon
              fill={
                props.location.pathname === '/administrator'
                  ? '#0052a8'
                  : 'grey'
              }
            ></AdministratorIcon>
          </div>
          <div className={styles.menuText}>Administrator</div>
        </div>
      </NavLink>
      <br></br>

      <NavLink to='/proctoring' activeClassName={styles.activeItems}>
        <div
          className={styles.LeftSideBarWrapper}
          id='LeftSideBarWrapper5'
          onClick={(e) => menuItemClickHandler(e)}
        >
          <div className={styles.iconContainer} style={{ color: 'white' }}>
            <WebProctoringIcons
              fill={
                props.location.pathname === '/proctoring' ? '#0052a8' : 'grey'
              }
            ></WebProctoringIcons>
          </div>
          <div className={styles.menuText}>Web Proctoring</div>
        </div>
      </NavLink>
      <br></br>

      <NavLink to='/news' activeClassName={styles.activeItems}>
        <div
          className={styles.LeftSideBarWrapper}
          onClick={(e) => menuItemClickHandler(e)}
          id='LeftSideBarWrapper6'
        >
          <div className={styles.iconContainer} style={{ color: 'white' }}>
            <NewsIcon
              fill={props.location.pathname === '/news' ? '#0052a8' : 'grey'}
            ></NewsIcon>
          </div>
          <div className={styles.menuText}>News & info</div>
        </div>
      </NavLink>
      <br></br>

      <NavLink to='/result' activeClassName={styles.activeItems}>
        <div
          className={styles.LeftSideBarWrapper}
          onClick={(e) => menuItemClickHandler(e)}
          id='LeftSideBarWrapper7'
        >
          <div className={styles.iconContainer}>
            <ResultIcon
              fill={props.location.pathname === '/result' ? '#0052a8' : 'grey'}
            ></ResultIcon>
          </div>
          <div className={styles.menuText}>Result</div>
        </div>
      </NavLink>
    </div>
  );
}

export default withRouter(LeftSideBarItems);
