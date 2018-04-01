
import { fromJS } from 'immutable';
import updateCategoryInfoReducer from '../reducer';

describe('updateCategoryInfoReducer', () => {
  it('returns the initial state', () => {
    expect(updateCategoryInfoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
