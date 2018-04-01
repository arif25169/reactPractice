/*
 *
 * UpdateCategoryInfo actions
 *
 */

import {
  DEFAULT_ACTION, SET_SECTION_LIST,
  CHANGE_SECTIONNAME, GET_STUDENT_INFO
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setSectionList(sectionList) {
  return {
    type: SET_SECTION_LIST,
    sectionList,
  };
}
export function changeSectionName(sectionname) {
  return {
    type: CHANGE_SECTIONNAME,
    sectionname,
  };
}


export function getStudentInfo(item) {
  return {
    type: GET_STUDENT_INFO,
    item,
  };
}
