import React from 'react';
import styles from './main.css';
//icons

//components
import Dashboard from './Dashboard/Dashboard';
import Modal from './modal/modal';
import Header from '../Header/Header';
import Exam from './Exam/ExamSettings';
import ExamInfo from './Exam/Examinfo/ExamInfo';
import StudentDashboard from './StudentDasboard/StudentDashboard';
import Course from './course/Course';
import MainAdministrator from './MainAdministrator/MainAdministrator';
import AddAdmin from '../main/Addadmin/AddAdmin';
import Proctoring from '../main/Proctoring/Proctoring';
import Newsmain from './Newsmain/Newsmain';
import ResultMain from './ResultMain/ResultMain';
import SettingMain from './SettingMain/SettingMain';
import Notification from './notification/Notification';

class Main extends React.Component {
  state = {
    showModal: false,
    pages: {
      Exam: false,
      Dashboard: false,
    },
    examProcedure: ['ExamSetting', 'ExamInformation'],
    examStage: 0,
  };
  closeModalHandler = () => {
    this.setState({
      showModal: false,
    });
  };
  showModalHandler = () => {
    this.setState({
      showModal: true,
    });
  };
  componentDidMount = () => {
    let page = { ...this.state.pages };
    page[this.props.name] = true;
    this.setState({ pages: page });
  };

  examProcedureHandler = () => {
    let a = this.state.examStage;

    if (a + 1 > 1) {
      return;
    } else {
      this.setState(() => {
        return { examStage: a + 1 };
      });
    }
  };
  examResetHandler = () => {
    this.setState({ examStage: 0 });
  };

  componentDidUpdate() {
    if (
      this.state.examProcedure[this.state.examStage] === 'ExamSetting' &&
      this.state.pages.Exam
    ) {
      this.props.examSidebar('Exam');
    }
    if (
      this.state.examProcedure[this.state.examStage] === 'ExamInformation' &&
      this.state.pages.Exam
    ) {
      this.props.examSidebar('Examinfo');
    }
  }

  render() {
    let examProcedure = this.state.examProcedure;
    let examProcedureStatus = this.state.examStage;
    let selectedStage = examProcedure[examProcedureStatus];
    let displayExam;
    if (selectedStage === 'ExamSetting') {
      displayExam = (
        <Exam
          proceed={this.examProcedureHandler}
          reset={this.examResetHandler}
        ></Exam>
      );
    }
    if (selectedStage === 'ExamInformation') {
      displayExam = (
        <ExamInfo
          proceed={this.examProcedureHandler}
          reset={this.examResetHandler}
        ></ExamInfo>
      );
    }
    return (
      <>
        <Modal
          show={this.state.showModal}
          clicked={this.closeModalHandler}
        ></Modal>
        <div className={styles.Main}>
          <Header showModalHandler={this.showModalHandler}></Header>
          <main className={styles.MainBody}>
            {this.state.pages.Dashboard ? <Dashboard></Dashboard> : null}
            {this.state.pages.Exam ? displayExam : null}
            {this.props.name === 'Student' ? (
              <StudentDashboard></StudentDashboard>
            ) : null}
            {this.props.name === 'Course' ? <Course></Course> : null}
            {this.props.name === 'Administrator' ? (
              <MainAdministrator></MainAdministrator>
            ) : null}
            {this.props.name === 'AddAdmin' ? <AddAdmin></AddAdmin> : null}
            {this.props.name === 'Proctoring' ? (
              <Proctoring></Proctoring>
            ) : null}

            {this.props.name === 'News' ? <Newsmain></Newsmain> : null}
            {this.props.name === 'Result' ? <ResultMain></ResultMain> : null}
            {this.props.name === 'Setting' ? <SettingMain></SettingMain> : null}
            {this.props.name === 'Notification' ? (
              <Notification></Notification>
            ) : null}
          </main>
        </div>
      </>
    );
  }
}

export default Main;
