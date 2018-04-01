import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { BASE_URL, GET_CLASS_CONFIGURATION_URL, STUDENT_CONFIG_LIST } from '../../../utils/serviceUrl';
import { setSectionList, changeSectionName, setStudentInfo } from './actions';
import { makeSelectSectionList, makeSelectSectionName, makeSelectStudentInfo, makeSelectclassConfigId } from './selectors';
import { SET_SECTION_LIST, CHANGE_SECTIONNAME, SUBMIT_STUDENT_FORM } from './constants';
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
    console.log('heloo');
    const response = yield call(request, requestUrl, options);
    console.log(response);
    if (response.item) {
      yield put(setSectionList(response.item));
    }
  } catch (err) {
    console.dir(err);
  }
}

export function* submitStudentForm() {
  const instituteId = 10012;
  const academicYear = 2018;
  const classConfigId = yield select(makeSelectclassConfigId());
  console.log('hia');
  const requestURL = BASE_URL.concat(STUDENT_CONFIG_LIST).concat('?instituteId=').concat(instituteId).concat('&academicYear=').concat(academicYear).concat('&classConfigId=').concat(classConfigId);
  console.log(requestURL);
  const info = yield call(request, requestURL);
  console.log(info);
  yield put(setStudentInfo(info.item));
}

// Individual exports for testing
export default function* defaultSaga() {
  yield fetchSectionList();
  
  yield takeLatest(SUBMIT_STUDENT_FORM, submitStudentForm);

}
