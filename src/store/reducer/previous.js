import * as actionType from '../actions/actionTypes';
import { updateState } from '../utility';

const initState = {
  examInfo: null,
  examSetting: null,
  loading: false,
  loaded: false,
  message: null,
};

const obtainPrevExamDetail = (state, action) => {
  return updateState(state, action);
};
const obtainPrevExamStart = (state, action) => {
  return updateState(state, action);
};

const clearObtainLoadedText = (state, action) => {
  return updateState(state, action);
};
const recordNotFound = (state, action) => {
  return updateState(state, action);
};

const previousReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.OBTAIN_PREVIOUS_EXAM_DETAILS:
      return obtainPrevExamDetail(state, {
        ...action.previousData,
        loading: false,
        loaded: true,
        message: null,
      });
    case actionType.OBTAIN_PREVIOUS_EXAM_DETAILS_START:
      return obtainPrevExamStart(state, {
        loading: true,
        examSetting: null,
        examInfo: null,
        message: null,
      });
    case actionType.CLEAR_OBTAIN_PREV_LOADED_TEXT:
      return clearObtainLoadedText(state, { loaded: false, message: null });
    case actionType.DETAIL_NOT_FOUND_TEXT:
      return recordNotFound(state, { message: action.message, loading: false });

    default:
      return state;
  }
};

export default previousReducer;
