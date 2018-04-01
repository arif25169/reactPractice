import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { BASE_URL, GET_CLASS_CONFIGURATION_URL, STUDENT_CONFIG_LIST } from '../../../utils/serviceUrl';
import { setSectionList, changeSectionName, getStudentInfo, getStudentData, changeSelectValue } from './actions';
import { makeSelectSelectValue, makeSelectStudentInfo, makeSelectStudentData, makeSelectSectionList, makeSelectSectionName } from './selectors';
import { SET_SECTION_LIST, CHANGE_SECTIONNAME, GET_STUDENT_INFO, GET_STUDENT_DATA, CHANGE_SELECTVALUE } from './constants';
import request from '../../../utils/request';

export function* getStudentInfoList() {
  const instituteId = 10012;
  const academicYear = 2016;
  const classConfigId = 100001;
  const sectionid = 100002;
  // console.log('Section Id : ' + sectionid);
  const requestURL = BASE_URL.concat(STUDENT_CONFIG_LIST).concat('?instituteId=').concat(instituteId).concat('&academicYear=').concat(academicYear).concat('&classConfigId=').concat(sectionid);
  const info = yield call(request, requestURL);
  yield put(getStudentInfo(info.item));
}

export function* getStudentDataList() {
  const instituteId = 10012;
  const academicYear = 2016;
  const classConfigId = 100001;
  const sectionid = yield select(makeSelectSectionName());
  const requestURL = BASE_URL.concat(STUDENT_CONFIG_LIST).concat('?instituteId=').concat(instituteId).concat('&academicYear=').concat(academicYear).concat('&classConfigId=').concat(sectionid);
  const info = yield call(request, requestURL);

  yield put(getStudentData(info.item));
}

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


export default function* defaultSaga() {
  yield takeLatest(GET_STUDENT_DATA, getStudentDataList);
  yield getStudentInfoList();
  yield fetchSectionList();
}
