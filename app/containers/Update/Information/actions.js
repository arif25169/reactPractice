/*
 *
 * Information actions
 *
 */

import {
  DEFAULT_ACTION,
 CHANGE_SECTIONNAME, SET_SECTION_LIST,SET_SECTION_INFO,SUBMIT_INFORMATION_FORM,SET_STD_BASIC_INFO,SET_CHECK_SELECTED_DATA
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeSectionName(id) {
  return {
    type: CHANGE_SECTIONNAME,
    id,
  };
}

export function setSectionList(sectionList) {
  return {
    type: SET_SECTION_LIST,
    sectionList,
  };
}

export function setSectionInfo(item) {
  return {
    type: SET_SECTION_INFO,
    item,
  }
}


export function setStdBasicInfo(item) {
  return {
    type: SET_STD_BASIC_INFO,
    item,
  }
}

export function setCheckSelectedData(checkSelectedData) {
  return {
    type: SET_CHECK_SELECTED_DATA,
    checkSelectedData,
  }
}


export function submitInformationForm() {
  return {
    type: SUBMIT_INFORMATION_FORM,
  };
}