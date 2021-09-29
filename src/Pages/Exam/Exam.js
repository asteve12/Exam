import React from 'react';
//styles
import styles from './Exam.css';

//components
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import Main from '../../components/main/main';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';

class Exam extends React.Component {
  state = {
    examSidebar: 'Exam',
  };

  handleExamChange = (name) => {
    if (this.state.examSidebar !== name) this.setState({ examSidebar: name });
    console.log(name);
  };
  render() {
    return (
      <div className={styles.ExamWrapper}>
        <LeftSidebar></LeftSidebar>
        <Main name='Exam' examSidebar={this.handleExamChange}></Main>

        {this.state.examSidebar === 'Exam' ? (
          <RightSidebar name='Exam'></RightSidebar>
        ) : (
          <RightSidebar name='Examinfo'></RightSidebar>
        )}
      </div>
    );
  }
}

export default Exam;
