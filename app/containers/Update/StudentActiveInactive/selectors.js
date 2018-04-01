import { createSelector } from 'reselect';

/**
 * Direct selector to the studentActiveInactive state domain
 */
const selectStudentActiveInactiveDomain = (state) => state.get('studentActiveInactive');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StudentActiveInactive
 */

const makeSelectStudentActiveInactive = () => createSelector(
  selectStudentActiveInactiveDomain,
  (substate) => substate.toJS()
);

const makeSelectSelectValue = () => createSelector(
  selectStudentActiveInactiveDomain,
    (substate) => substate.get('selectvalue')
);

const makeSelectStudentInfo = () => createSelector(
  selectStudentActiveInactiveDomain,
  (substate) => substate.get('studentInfo')
);

const makeSelectSectionList = () => createSelector(
  selectStudentActiveInactiveDomain,
  (substate) => substate.get('sectionList')
);

const makeSelectSectionName = () => createSelector(
  selectStudentActiveInactiveDomain,
    (substate) => substate.get('sectionname')
);

const makeSelectStudentData = () => createSelector(
  selectStudentActiveInactiveDomain,
  (substate) => substate.get('studentData')
);


export default makeSelectStudentActiveInactive;
export {
 // selectStudentActiveInactiveDomain,
  makeSelectSelectValue,
  makeSelectStudentInfo,
  makeSelectSectionList,
  makeSelectSectionName,
  makeSelectStudentData
};
