import { generation } from "../confic/const";
/**
* AdminReducer will process state by checking action (save, del, update...)
* @param {Object} state is user object
* @param {Object} action is action object
*/
export const AdminReducer = (state = generation, action) => {
  switch (action.type) {
    case ("SET_FEEDBACKS"):
      state.feedbacks = action.payload;
      return { ...state };
    case ("SET_STATISTIC"):
      state.statistic = action.payload;
      return { ...state };
    default:
      return state;
  }
};