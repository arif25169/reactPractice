import { createSelector } from 'reselect';

/**
 * Direct selector to the updateStudentId state domain
 */
const selectUpdateStudentIdDomain = (state) => state.get('updateStudentId');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UpdateStudentId
 */

const makeSelectUpdateStudentId = () => createSelector(
  selectUpdateStudentIdDomain,
  (substate) => substate.toJS()
);

const makeSelectSectionList = () => createSelector(
  selectUpdateStudentIdDomain,
  (substate) => substate.get('sectionList')
);

const makeSelectSectionName = () => createSelector(
    selectUpdateStudentIdDomain,
    (substate) => substate.get('sectionname')
);

const makeSelectStudentInfo = () => createSelector(
    selectUpdateStudentIdDomain,
    (substate) => substate.get('studentInfo')
);

const makeSelectclassConfigId = () => createSelector(
  selectUpdateStudentIdDomain,
  (substate) => substate.get('classConfigId')
);

export default makeSelectUpdateStudentId;
export {
  selectUpdateStudentIdDomain,
  makeSelectSectionList,
  makeSelectSectionName,
  makeSelectStudentInfo,
  makeSelectclassConfigId,
};
