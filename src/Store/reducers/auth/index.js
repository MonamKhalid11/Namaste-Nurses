import * as TYPES from '../../actions/types';
const initialState = {
  user: null,
  token: null,
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADD_USER:
      return {
        ...state,
        user: actions.user,
      };
    case TYPES.LOG_OUT:
      return {
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
export default reducer;
