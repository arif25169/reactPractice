import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { BASE_URL,FETCH_CLASS_LIST,FETCH_BASIC_INFO_LIST } from '../../../utils/serviceUrl';
import {setClassList, saveClass,setStudentInfoList} from './actions';
import request from '../../../utils/request';
import {SAVE_CLASS, SET_CLASS_LIST,SET_STUDENT_INFO_LIST,SUBMIT_FORM  } from './constants';
import {makeSelectClassList,makeSelectInfoList,makeSelectedClassId} from './selectors';


export function* fetchClassList() {
  const typeId = 2102;
  const instituteId = 10012;
  const requestUrl = BASE_URL.concat(FETCH_CLASS_LIST).concat('?instituteID=').concat(instituteId).concat('&typeId=').concat(typeId);
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = yield call(request, requestUrl, options);
    console.log(response);
    if (response.item) {
      yield put(setClassList(response.item));
    }
  } catch (err) {
    console.dir(err);
  }
}

export function* submitForm() {

  const instituteId = 10012;
  const classConfigId = 100148;
  const academicYear = 2017;

  console.log("Before Url");
  const requestURL = BASE_URL.concat(FETCH_BASIC_INFO_LIST).concat('?instituteId=').concat(instituteId).concat('&classConfigId=').concat(classConfigId).concat('&academicYear=').concat(academicYear);
  const info = yield call(request, requestURL);
  console.log("After Url");
  console.log(info);
  yield put(setStudentInfoList(info.item));
}

export default function* defaultSaga() {
  yield fetchClassList() ;
  yield takeLatest(SUBMIT_FORM, submitForm); 
  // yield fetchStudentBasicInfoList();
}