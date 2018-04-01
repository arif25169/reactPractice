
import { fromJS } from 'immutable';
import photoReducer from '../reducer';

describe('photoReducer', () => {
  it('returns the initial state', () => {
    expect(photoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
