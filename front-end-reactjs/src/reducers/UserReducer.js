import { initialization } from "../confic/const";
/**
 * UserReducer will process state by checking action (save, del, update...)
 * @param {Object} state is user object
 * @param {Object} action is action object
 */
export const UserReducer = (state = initialization, action) => {
    switch (action.type) {
        case ("SET_ACCOUNT"):
            state.infor = action.payload;
            return { ...state };
        case ("SET_LONGSCHEDULER_UPCOMING"):
            state.longSchedulers.upcoming = action.payload;
            return { ...state };
        case ("SET_SHORTSCHEDULER_UPCOMING"):
            state.shortSchedulers.upcoming = action.payload;
            return { ...state };
        case ("SET_LONGSCHEDULER_OVER"):
            state.longSchedulers.over = action.payload;
            return { ...state };
        case ("SET_SHORTSCHEDULER_OVER"):
            state.shortSchedulers.over = action.payload;
            return { ...state };

        default:
            return state;
    }
};