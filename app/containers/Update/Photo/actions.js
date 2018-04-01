/*
 *
 * Photo actions
 *
 */

import {
  DEFAULT_ACTION,SET_CLASS_LIST,SET_STUDENT_INFO_LIST,SAVE_CLASS,submitForm, SUBMIT_FORM
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setClassList(classList) {
  return {
    type: SET_CLASS_LIST,
    classList,
  };
}

export function setStudentInfoList(item) {
  return {
    type: SET_STUDENT_INFO_LIST,
    item,
  };
}

export function saveClass(id) {
  return {
    type: SAVE_CLASS,
    id,
  };
}

export function submitClassForm() {
  return {
    type: SUBMIT_FORM,
  };
}