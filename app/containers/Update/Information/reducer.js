/*
 *
 * Information reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,SET_SECTION_LIST,SET_SECTION_INFO,SET_STD_BASIC_INFO, CHANGE_SECTIONNAME,SET_CHECK_SELECTED_DATA
} from './constants';

const initialState = fromJS({
  sectionList: {},
  id: '',
  checkSelectedData: {},
});

function informationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

      case SET_SECTION_LIST:
      return state.set('sectionList', action.sectionList);

      case CHANGE_SECTIONNAME:
      return state.set('id', action.id);

      case SET_SECTION_INFO:
      return state.set('sectionInfo', action.item);

      case SET_CHECK_SELECTED_DATA:
      return state.set('checkSelectedData', action.checkSelectedData);
      
      case SET_STD_BASIC_INFO:
      return state.set('stdBasicInfo', action.item);

    default:
      return state;
  }
}

export default informationReducer;
