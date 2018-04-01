import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { setSectionInfo,setSectionList,setStdBasicInfo, submitInformationForm,setCheckSelectedData } from './actions';
import { BASE_URL,UPDATE_ID, FETCH_CLASS_LIST, SAVE_CLASS_CONFIGURATION_URL, GET_CLASS_CONFIGURATION_URL, GET_GROUP_CONFIGURATION_LIST,SAVE_GROUP_CONFIGURATION_URL,FETCH_BASIC_INFO_LIST} from '../../../utils/serviceUrl';
import request from '../../../utils/request';
import {SET_SECTION_LIST,SUBMIT_INFORMATION_FORM,SET_SECTION_INFO,SET_CHECK_SELECTED_DATA } from './constants';
import {makeSelectSectionInfo,makeSelectSectionList,makeCheckSelectedData} from './selectors';


  export function* fetchSectionList() {

    const instituteId = 10012;
    const requestURL = BASE_URL.concat(GET_CLASS_CONFIGURATION_URL).concat('?instituteId=').concat(instituteId);
    const info = yield call(request, requestURL);
    yield put(setSectionList(info.item));
  }

  export function* fetchStudentBasicInfoList() {

    const instituteId = 10012;
    const classConfigId = 100149;
    const academicYear = 2017;

    console.log("Before Url");
    const requestURL = BASE_URL.concat(FETCH_BASIC_INFO_LIST).concat('?instituteId=').concat(instituteId).concat('&classConfigId=').concat(classConfigId).concat('&academicYear=').concat(academicYear);
    const info = yield call(request, requestURL);
    console.log("After Url");
    console.log(info);
  
    yield put(setStdBasicInfo(info.item));
  }

  export function* checkSelectedDataSave() {
    //console.log('inside Method');

   const selectedCheckData = yield select(makeCheckSelectedData());
   //console.log("Selected List  Array");
   //console.log(selectedCheckData);

  let data = [];

  //console.log('sobhan');
  for (const j in selectedCheckData) {
     const selectedData = selectedCheckData[j];
     for (const i in selectedData) {
      const selectedData2 = selectedData[i];
      const requestURL = BASE_URL.concat(UPDATE_ID);
     
      const options = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    
        
        body: JSON.stringify(
          [{
          "studentId": selectedData2.studentId,
          "studentName": selectedData2.studentName,
          "bloodGroup": selectedData2.bloodGroup,
          "identificationId": selectedData2.identificationId,
          "bloodGroup": selectedData2.bloodGroup,
           "customStudentId": selectedData2.customStudentId,
          "fatherName": selectedData2.fatherName,
          "guardianMobile": selectedData2.guardianMobile,
          "identificationId": selectedData2.identificationId,
          "motherName": selectedData2.motherName,
          "registrationNo": selectedData2.registrationNo,
          "studentDOB": selectedData2.studentDOB,
          "studentGender": selectedData2.studentGender,
          "studentReligion": selectedData2.studentReligion,
          "studentRoll": selectedData2.studentRoll
        }]
      )
      }

      const result = yield call(request, requestURL, options);
     }
     // data.push(selectedData);
      //console.log(data);

    
    }

  //   let finalData = {
  //     coreSettingDTOs: data,
  
  //   };

  // const requestUrl = BASE_URL.concat(UPDATE_ID);

  // const options = {
  //   method: 'PUT',
  //   headers: {
 
  //     'Content-Type': 'application/json',
  //   },
   
  //   body: JSON.stringify(finalData),
 
  // };
  // try {
  //  // console.log(setCheckSelectedData);
  //   const response = yield call(request,requestUrl, options);
  //   console.log(response);
  // } catch (err) {
  //   console.log(err);
  // }

}

  export function* submitInfoForm() {


  }

  
  export default function* defaultSaga() {

    yield fetchSectionList();
    yield fetchStudentBasicInfoList();
    yield takeLatest(SET_CHECK_SELECTED_DATA,checkSelectedDataSave);
    yield takeLatest(SUBMIT_INFORMATION_FORM, submitInfoForm);
  }