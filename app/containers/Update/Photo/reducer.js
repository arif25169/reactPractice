/*
 *
 * Photo reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,SET_CLASS_LIST,SET_STUDENT_INFO_LIST,SAVE_CLASS
} from './constants';

const initialState = fromJS({
  classList: {},
  id: ''
});

function photoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

      case SET_CLASS_LIST:
      return state.set('classList', action.classList);
      case SET_STUDENT_INFO_LIST:
      return state.set('infoList', action.item);
    case SAVE_CLASS:
      return state.set('id', action.id);

    default:
      return state;
  }
}

export default photoReducer;
