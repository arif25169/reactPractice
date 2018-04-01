
import { fromJS } from 'immutable';
import studentStatusReducer from '../reducer';

describe('studentStatusReducer', () => {
  it('returns the initial state', () => {
    expect(studentStatusReducer(undefined, {})).toEqual(fromJS({}));
  });
});
