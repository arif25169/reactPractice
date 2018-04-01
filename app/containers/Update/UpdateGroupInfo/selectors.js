import { createSelector } from 'reselect';

/**
 * Direct selector to the updateGroupInfo state domain
 */
const selectUpdateGroupInfoDomain = (state) => state.get('updateGroupInfo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UpdateGroupInfo
 */

const makeSelectUpdateGroupInfo = () => createSelector(
  selectUpdateGroupInfoDomain,
  (substate) => substate.toJS()
);

const makeSelectSectionList = () => createSelector(
  selectUpdateGroupInfoDomain,
  (substate) => substate.get('sectionList')
);

const makeSelectSectionName = () => createSelector(
  selectUpdateGroupInfoDomain,
    (substate) => substate.get('sectionname')
);

const makeSelectStudentInfo = () => createSelector(
  selectUpdateGroupInfoDomain,
  (substate) => substate.get('studentInfo')
);

export default makeSelectUpdateGroupInfo;
export {
  //selectUpdateGroupInfoDomain,
  makeSelectSectionList,
  makeSelectSectionName,
  makeSelectStudentInfo
};
