import { createSelector } from 'reselect';

/**
 * Direct selector to the updateSectionInfo state domain
 */
const selectUpdateSectionInfoDomain = (state) => state.get('updateSectionInfo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UpdateSectionInfo
 */

const makeSelectUpdateSectionInfo = () => createSelector(
  selectUpdateSectionInfoDomain,
  (substate) => substate.toJS()
);

const makeSelectSectionList = () => createSelector(
  selectUpdateSectionInfoDomain,
  (substate) => substate.get('sectionList')
);

const makeSelectSectionName = () => createSelector(
  selectUpdateSectionInfoDomain,
    (substate) => substate.get('sectionname')
);

const makeSelectStudentInfo = () => createSelector(
  selectUpdateSectionInfoDomain,
  (substate) => substate.get('studentInfo')
);

export default makeSelectUpdateSectionInfo;
export {
  makeSelectUpdateSectionInfo,
  makeSelectSectionList,
  makeSelectSectionName,
  makeSelectStudentInfo
};
