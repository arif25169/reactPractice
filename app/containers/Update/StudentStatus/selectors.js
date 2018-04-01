import { createSelector } from 'reselect';

/**
 * Direct selector to the studentStatus state domain
 */
const selectStudentStatusDomain = (state) => state.get('studentStatus');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StudentStatus
 */

const makeSelectStudentStatus = () => createSelector(
  selectStudentStatusDomain,
  (substate) => substate.toJS()
);

export default makeSelectStudentStatus;
export {
  selectStudentStatusDomain,
};
