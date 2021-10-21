import React from 'react';
//styles
import styles from './Exam.css';

//components
import LeftSidebar from '../../components/Sidebar/LeftSideBar/LeftSIdebar';
import Main from '../../components/main/main';
import RightSidebar from '../../components/Sidebar/RightSidebar/RightSidebar';
import Context from './ExamContext';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
//icons
import { MdDoneAll } from 'react-icons/md';

class Exam extends React.Component {
  state = {
    examSidebar: 'Exam',
    examSettings: {
      instruction: null,
      totalSubject: null,
      questionPerSubject: null,
      examDate: null,
      studentDelayTime: null,
      randomiseQuestion: null,
      randomiseAnswers: null,
      examInstructionEnd: null,
    },
    examInformation: {
      Subject: null,
      Questions: null,
      firstAnswer: null,
      secondAnswer: null,
      thirdAnswer: null,
      fourthAnswer: null,
      correctOption: null,
    },
    PreviousInfo: false,
    previousSettings: false,
    PreviousPage: false,
    examSettingValidationMsg: {},
    validateExamSet: false,
  };
  handleExamChange = (name) => {
    if (this.state.examSidebar !== name) this.setState({ examSidebar: name });
  };

  handleInputChange = (value, itemsToUpdate) => {
    const updatedSettings = {
      ...this.state,
      examSettings: {
        ...this.state.examSettings,
        [itemsToUpdate]: value,
      },
    };
    this.setState(updatedSettings);
    this.handleExamSetValidation(updatedSettings);
    console.log(this.state, 'hi');
  };

  handleExamInfoInputChange = (value, objectToUpdate) => {
    const updatedState = {
      ...this.state,
      examInformation: {
        ...this.state.examInformation,
        [objectToUpdate]: value,
      },
    };

    this.setState(updatedState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddExamSettingData({
      examSetting: this.state.examSettings,
      examInfo: this.state.examInformation,
    });
    console.log(this.state);
  };

  handlePreviousPage = (e) => {
    this.setState({ previousPage: true });
  };

  handleExamYearChange = (value) => {
    this.props.onPreviousRequest(value);
  };

  prevSetHandler = () => {
    this.setState({ previousSettings: true });
  };
  prevInfoHandler = () => {
    this.setState({ PreviousInfo: true });
  };

  handleExamSetValidation = (updatedSettings) => {
    for (let inptField in updatedSettings.examSettings) {
      if (updatedSettings.examSettings[inptField]) {
        this.setState(() => {
          const updatedState = { ...updatedSettings, validateExamSet: true };
          return updatedState;
        });
      } else {
        this.setState(() => {
          const updatedState = {
            ...updatedSettings,
            validateExamSet: false,
            examSettingValidationMsg: {
              ...updatedSettings.examSettingValidationMsg,
              [inptField]: 'this field is required',
            },
            validateExamSet: false,
          };

          return updatedState;
        });
      }
    }
  };

  render() {
    let saved = null;
    if (this.props.saved) {
      saved = (
        <div className={styles.SaveModal}>
          <div className={styles.MessageBox}>
            <p> Questions Saved Succedfully</p>
            <MdDoneAll color='green'></MdDoneAll>
          </div>
        </div>
      );
    }
    return (
      <Context.Provider
        value={{
          handleInputChange: this.handleInputChange,
          handleSubmit: this.handleSubmit,
          examSettings: this.state.examSettings,
          handleExamInfoInput: this.handleExamInfoInputChange,
          examInformation: this.state.examInformation,
          handleExamYearChange: this.handleExamYearChange,
          prevSetHandler: this.prevSetHandler,
          prevExamSettingsDetail: this.props.prevSettingsDetail,
          prevInfoHandler: this.prevInfoHandler,
          prevExamInfoDetail: this.props.prevInfoDetail,
          previousLoadingStatus: this.props.previousLoadingStatus,
          obtainPrevDetailStart: this.props.onPreviousDetailsStart,
          isPrevDetailLoaded: this.props.isPrevDetailLoaded,
          recordNotFoundMsg: this.props.recordNotFoundMsg,
          validateExamSet: this.state.validateExamSet,
        }}
      >
        <div className={styles.ExamWrapper}>
          {saved}
          <LeftSidebar></LeftSidebar>
          <Main
            name='Exam'
            examSidebar={this.handleExamChange}
            previuosPage={this.state.previousPage}
            previousSettings={this.state.previousSettings}
            PreviousInfo={this.state.PreviousInfo}
          ></Main>

          {this.state.examSidebar === 'Exam' ? (
            <RightSidebar name='Exam'></RightSidebar>
          ) : (
            <RightSidebar
              name='Examinfo'
              previous={this.handlePreviousPage}
            ></RightSidebar>
          )}
        </div>
      </Context.Provider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    saved: state.examDetail.saved,
    prevSettingsDetail: state.previousDetails.examSetting,
    prevInfoDetail: state.previousDetails.examInfo,
    previousLoadingStatus: state.previousDetails.loading,
    isPrevDetailLoaded: state.previousDetails.loaded,
    recordNotFoundMsg: state.previousDetails.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddExamSettingData: (ExamSettingData) =>
      dispatch(action.addExamInstuction(ExamSettingData)),
    onPreviousRequest: (year) =>
      dispatch(action.obtainPreviousExamDetail(year)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
