/*
 *
 * UpdateStudentId actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_SECTION_LIST,
  CHANGE_SECTIONNAME,
  SUBMIT_STUDENT_FORM,
  SET_STUDENT_INFO,
  SAVE_ID,
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

export function submitStudentForm() {
  return {
    type: SUBMIT_STUDENT_FORM,
  };
}

export function setStudentInfo(item) {
  return {
    type: SET_STUDENT_INFO,
    item,
  };
}

export function saveId(classConfigId) {
  return {
    type: SAVE_ID,
    classConfigId,
  };
}
