/*
 *
 * StudentActiveInactive reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,CHANGE_SELECTVALUE, GET_STUDENT_INFO, SET_SECTION_LIST, CHANGE_SECTIONNAME, GET_STUDENT_DATA
} from './constants';

const initialState = fromJS({
  selectvalue: '',
  studentInfo: {},
  sectionList: {},
  sectionname: '',
  studentData: {},
});

function studentActiveInactiveReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
      case CHANGE_SELECTVALUE:
      return state.set('selectvalue', action.selectvalue);
      case GET_STUDENT_INFO:
      return state.set('studentInfo', action.item);
      case SET_SECTION_LIST:
      return state.set('sectionList', action.sectionList);
    case CHANGE_SECTIONNAME:
      return state.set('sectionname', action.sectionname);
      case GET_STUDENT_DATA:
      return state.set('studentData', action.item);
    default:
      return state;
  }
}

export default studentActiveInactiveReducer;
