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
    case TYPES.ADD_LIKE:
      let object = state.nurseFeed.map(reduxItem => {
        if (reduxItem.id === actions.id) {
          reduxItem.like_count = reduxItem.like_count + 1
          reduxItem.like = true
        }
        return reduxItem
      });
      return {
        ...state,
        nurseFeed: object,
      };

    default:
      return state;
  }
};
export default reducer;
