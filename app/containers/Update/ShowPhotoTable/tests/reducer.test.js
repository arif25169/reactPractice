
import { fromJS } from 'immutable';
import showPhotoTableReducer from '../reducer';

describe('showPhotoTableReducer', () => {
  it('returns the initial state', () => {
    expect(showPhotoTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
