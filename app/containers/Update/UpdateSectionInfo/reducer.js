/*
 *
 * UpdateSectionInfo reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, SET_SECTION_LIST, CHANGE_SECTIONNAME,GET_STUDENT_INFO
} from './constants';

const initialState = fromJS({
  sectionList: {},
  sectionname: '',
  studentInfo: {},

});

function updateSectionInfoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_SECTION_LIST:
      return state.set('sectionList', action.sectionList);
    case CHANGE_SECTIONNAME:
      return state.set('sectionname', action.sectionname);
      case GET_STUDENT_INFO:
      return state.set('studentInfo', action.item);
    default:
      return state;
  }
}

export default updateSectionInfoReducer;
