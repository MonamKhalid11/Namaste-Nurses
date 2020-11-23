import * as TYPES from '../../actions/types';
const initialState = {
  nurseFeed: [],
  nurseProfile: null
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.FEED_DATA:
      return {
        ...state,
        nurseFeed: actions.feed,
      };
    case TYPES.NURSE_PROFILE:
      return {
        ...state,
        nurseProfile: actions.profile,
      };
    default:
      return state;
  }
};
export default reducer;
