/*
 *
 * UpdateStudentId reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, SET_SECTION_LIST, CHANGE_SECTIONNAME,SET_STUDENT_INFO,SAVE_ID,
} from './constants';

const initialState = fromJS({
  sectionList: {},
  classConfigId: {},
  studentInfo:{},
});

function updateStudentIdReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_SECTION_LIST:
      return state.set('sectionList', action.sectionList);
    case CHANGE_SECTIONNAME:
      return state.set('sectionname', action.sectionname);
    case SET_STUDENT_INFO:
      return state.set('studentInfo', action.item);
    case SAVE_ID:
      return state.set('classConfigId', action.classConfigId);
    default:
      return state;
  }
}

export default updateStudentIdReducer;
