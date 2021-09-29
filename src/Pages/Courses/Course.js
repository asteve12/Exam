import React, { Component, createContext } from 'react';
import Main from '../../components/main/main';
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
//styles
import styles from './Course.css';

//component

export const context = createContext();

class Course extends Component {
  state = {
    EditCourse: false,
  };

  courseEditHandler = () => {
    this.setState({ EditCourse: true });
  };
  render() {
    return (
      <div className={styles.CourseWrapper}>
        <context.Provider
          value={{
            edit: this.state.EditCourse,
            handleEdit: this.courseEditHandler,
          }}
        >
          <LeftSidebar></LeftSidebar>
          <Main name='Course' edit={this.state.EditCourse}></Main>
          <RightSidebar
            name='Course'
            edit={this.courseEditHandler}
          ></RightSidebar>
        </context.Provider>
      </div>
    );
  }
}

export default Course;
