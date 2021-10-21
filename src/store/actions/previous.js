import * as actionType from './actionTypes';
import axios from '../../axios-post';

const obtainPreviousDetail = (previousData) => {
  return {
    type: actionType.OBTAIN_PREVIOUS_EXAM_DETAILS,
    previousData: previousData,
  };
};

export const obtainPreviousDetailStart = () => {
  return {
    type: actionType.OBTAIN_PREVIOUS_EXAM_DETAILS_START,
  };
};

export const clearLoadedText = () => {
  return {
    type: actionType.CLEAR_OBTAIN_PREV_LOADED_TEXT,
  };
};

export const whenDetailNotFound = () => {
  return {
    type: actionType.DETAIL_NOT_FOUND_TEXT,
    message: 'sorry record does not exist',
  };
};

export const obtainPreviousExamDetail = (year) => {
  return (dispatch) => {
    dispatch(obtainPreviousDetailStart());

    axios
      .get('/examDetail.json')
      .then((response) => {
        let examDetails = response.data;
        let obtainedDetails;

        for (let i in examDetails) {
          let examData = examDetails[i];
          const { examSetting } = { ...examData };

          if (
            examSetting.examDate &&
            examSetting.examDate.split('-').shift() === year
          ) {
            obtainedDetails = examData;

            break;
          }
        }

        if (obtainedDetails) {
          dispatch(obtainPreviousDetail(obtainedDetails));
          setTimeout(() => {
            dispatch(clearLoadedText());
          }, 1000);
        } else {
          dispatch(whenDetailNotFound());
          return;
        }
      })
      .catch((err) => {
        console.log('my', err);
      });
  };
};
