import * as actionType from '../actions/actionTypes';
import { updateState } from '../utility';

const instruction = {
  instruction: null,
  totalSubject: null,
  questionPerSubject: null,
  examDate: null,
  studentDelayTime: null,
  randomQuestion: null,
  randomizeAnswers: null,
  examEndInstructions: null,
  saved: false,
};

const addExamInstruction = (state, action) => {
  return updateState(state, { examSettingsData: action.examSettingData });
};

const examSavedSuccess = (state, action) => {
  return updateState(state, { saved: true });
};

const removeExamSaveModal = (state, action) => {
  return updateState(state, { saved: false });
};

export const examSettingsReducer = (state = instruction, action) => {
  switch (action.type) {
    case actionType.ADD_EXAM_INSTRUCTION:
      return addExamInstruction(state, action);
    case actionType.EXAM_SAVED:
      return examSavedSuccess(state, action);
    case actionType.REMOVED_EXAM_SAVED_MODAL:
      return removeExamSaveModal(state, action);

    default:
      return state;
  }
};
