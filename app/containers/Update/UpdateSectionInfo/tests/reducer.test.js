
import { fromJS } from 'immutable';
import updateSectionInfoReducer from '../reducer';

describe('updateSectionInfoReducer', () => {
  it('returns the initial state', () => {
    expect(updateSectionInfoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
