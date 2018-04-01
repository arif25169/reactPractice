import { createSelector } from 'reselect';

/**
 * Direct selector to the updateCategoryInfo state domain
 */
const selectUpdateCategoryInfoDomain = (state) => state.get('updateCategoryInfo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UpdateCategoryInfo
 */

const makeSelectUpdateCategoryInfo = () => createSelector(
  selectUpdateCategoryInfoDomain,
  (substate) => substate.toJS()
);


const makeSelectSectionList = () => createSelector(
  selectUpdateCategoryInfoDomain,
  (substate) => substate.get('sectionList')
);

const makeSelectSectionName = () => createSelector(
  selectUpdateCategoryInfoDomain,
    (substate) => substate.get('sectionname')
);

const makeSelectStudentInfo = () => createSelector(
  selectUpdateCategoryInfoDomain,
  (substate) => substate.get('studentInfo')
);



//export default makeSelectUpdateCategoryInfo;
export {
  makeSelectUpdateCategoryInfo,
  makeSelectSectionList,
  makeSelectSectionName,
  makeSelectStudentInfo
};
