import * as TYPES from '../../actions/types';
const initialState = {
  nurseFeed: [],
  nurseProfile: null,
  classesDetails: [],
  nurseComments: [],
  nurseLikes: [],
  coursesLists: [],
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
    case TYPES.NURSE_PREVIOUS_CLASSES:
      return {
        ...state,
        classesDetails: actions.previousClasses,
      };
    case TYPES.NURSE_COMMENTS:
      return {
        ...state,
        nurseComments: actions.comments,
      };
    case TYPES.NURSE_LIKES:
      return {
        ...state,
        nurseLikes: actions.likes,
      };
    case TYPES.ONLINE_COURSES:
      return {
        ...state,
        coursesLists: actions.courses,
      };
    default:
      return state;
  }
};
export default reducer;
