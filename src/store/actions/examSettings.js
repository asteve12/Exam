import * as actionType from './actionTypes';
import axiosInstance from '../../axios-post';

export const examSavedSuccessfully = () => {
  return {
    type: actionType.EXAM_SAVED,
  };
};

export const removeExamModal = () => {
  return {
    type: actionType.REMOVED_EXAM_SAVED_MODAL,
  };
};

export const addExamInstuction = (examSettingData) => {
  return (dispatch) => {
    axiosInstance
      .post('/examDetail.json', examSettingData)
      .then((response) => {
        dispatch(examSavedSuccessfully());
        setTimeout(() => {
          dispatch(removeExamModal());
        }, 900);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
