
import { fromJS } from 'immutable';
import studentActiveInactiveReducer from '../reducer';

describe('studentActiveInactiveReducer', () => {
  it('returns the initial state', () => {
    expect(studentActiveInactiveReducer(undefined, {})).toEqual(fromJS({}));
  });
});
