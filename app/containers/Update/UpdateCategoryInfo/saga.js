import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { BASE_URL, GET_CLASS_CONFIGURATION_URL, STUDENT_CONFIG_LIST } from '../../../utils/serviceUrl';
import { setSectionList, changeSectionName, getStudentInfo } from './actions';
import { makeSelectSectionList, makeSelectSectionName, makeSelectStudentInfo } from './selectors';
import { SET_SECTION_LIST, CHANGE_SECTIONNAME, GET_STUDENT_INFO } from './constants';
import request from '../../../utils/request';



export function* fetchSectionList() {

  const instituteId = 10012;
  const requestUrl = BASE_URL.concat(GET_CLASS_CONFIGURATION_URL).concat('?instituteId=').concat(instituteId);
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = yield call(request, requestUrl, options);
    if (response.item) {
      yield put(setSectionList(response.item));
    }
  } catch (err) {
    console.dir(err);
  }
}

export function* getStudentInfoList() {
  const instituteId = 10012
  const academicYear = 2016;
  const classConfigId = 100001;
  const sectionid = yield select(makeSelectSectionName());
  // console.log('Section Id : ' + sectionid);
  const requestURL = BASE_URL.concat(STUDENT_CONFIG_LIST).concat('?instituteId=').concat(instituteId).concat('&academicYear=').concat(academicYear).concat('&classConfigId=').concat(sectionid);
  const info = yield call(request, requestURL);
  yield put(getStudentInfo(info.item));
}


export default function* defaultSaga() {
  yield fetchSectionList();
  yield takeLatest(GET_STUDENT_INFO, getStudentInfoList);

}