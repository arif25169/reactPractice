
import { fromJS } from 'immutable';
import studentListReducer from '../reducer';

describe('studentListReducer', () => {
  it('returns the initial state', () => {
    expect(studentListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
