import { createSelector } from 'reselect';

/**
 * Direct selector to the studentList state domain
 */
const selectStudentListDomain = (state) => state.get('studentList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StudentList
 */

const makeSelectStudentList = () => createSelector(
  selectStudentListDomain,
  (substate) => substate.toJS()
);

export default makeSelectStudentList;
export {
  selectStudentListDomain,
};
