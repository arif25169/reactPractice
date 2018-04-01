
import { fromJS } from 'immutable';
import updateStudentIdReducer from '../reducer';

describe('updateStudentIdReducer', () => {
  it('returns the initial state', () => {
    expect(updateStudentIdReducer(undefined, {})).toEqual(fromJS({}));
  });
});
