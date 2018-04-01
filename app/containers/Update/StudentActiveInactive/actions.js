/*
 *
 * StudentActiveInactive actions
 *
 */

import {
  DEFAULT_ACTION,CHANGE_SELECTVALUE, GET_STUDENT_INFO,GET_STUDENT_DATA, SET_SECTION_LIST, CHANGE_SECTIONNAME
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeSelectValue(selectvalue) {
  return {
    type: CHANGE_SELECTVALUE,
    selectvalue,
  };
}

export function getStudentInfo(item) {
  return {
    type: GET_STUDENT_INFO,
    item,
  };
}

//TABLE 2
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


export function getStudentData(item) {
  return {
    type: GET_STUDENT_DATA,
    item,
  };
}