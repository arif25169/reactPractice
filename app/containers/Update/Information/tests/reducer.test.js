
import { fromJS } from 'immutable';
import informationReducer from '../reducer';

describe('informationReducer', () => {
  it('returns the initial state', () => {
    expect(informationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
