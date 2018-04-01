import { createSelector } from 'reselect';

/**
 * Direct selector to the showPhotoTable state domain
 */
const selectShowPhotoTableDomain = (state) => state.get('showPhotoTable');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ShowPhotoTable
 */

const makeSelectShowPhotoTable = () => createSelector(
  selectShowPhotoTableDomain,
  (substate) => substate.toJS()
);

export default makeSelectShowPhotoTable;
export {
  selectShowPhotoTableDomain,
};
