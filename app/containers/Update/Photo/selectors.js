import { createSelector } from 'reselect';

/**
 * Direct selector to the photo state domain
 */
const selectPhotoDomain = (state) => state.get('photo');

const makeSelectPhoto = () => createSelector( selectPhotoDomain,(substate) => substate.toJS());

const makeSelectClassList = () => createSelector( selectPhotoDomain,(substate) => substate.get('classList'));
const makeSelectedClassId = () => createSelector( selectPhotoDomain,(substate) => substate.get('id'));
const makeSelectInfoList = () => createSelector( selectPhotoDomain,(substate) => substate.get('infoList'));

export {
  selectPhotoDomain,
  makeSelectClassList,
  makeSelectInfoList,
  makeSelectedClassId
};
