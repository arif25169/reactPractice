
import { fromJS } from 'immutable';
import updateGroupInfoReducer from '../reducer';

describe('updateGroupInfoReducer', () => {
  it('returns the initial state', () => {
    expect(updateGroupInfoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
