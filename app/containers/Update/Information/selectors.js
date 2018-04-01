import { createSelector } from 'reselect';

/**
 * Direct selector to the information state domain
 */
const selectInformationDomain = (state) => state.get('information');


const makeSelectSectionList = () => createSelector(selectInformationDomain,(substate) => substate.get('sectionList'));
const makeSelectSectionName = () => createSelector(selectInformationDomain,(substate) => substate.get('id'));
const makeSelectSectionInfo = () => createSelector(selectInformationDomain, (abc) => abc.get('sectionInfo'));
const makeSelectStdBasicInfo = () => createSelector(selectInformationDomain, (abc) => abc.get('stdBasicInfo'));

 const makeCheckSelectedData = () => createSelector(selectInformationDomain, (abc) => abc.get('checkSelectedData'));

export {
  selectInformationDomain,
  makeSelectSectionList,
  makeSelectSectionInfo,
  makeSelectStdBasicInfo,
  makeSelectSectionName,
  makeCheckSelectedData,
  
};
