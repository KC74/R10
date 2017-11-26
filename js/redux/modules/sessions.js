import { formatSessionData } from "../resources/jsonHelpers";

const initialState = {
  sessionSchedulesData: [],
  isLoading: false
};

// ACTIONS
const GET_SESSION_SCHEDULES_BEGIN = "GET_SESSION_SCHEDULES_BEGIN";
const GET_SESSION_SCHEDULES_SUCCESS = "GET_SESSION_SCHEDULES_SUCCESS";
const GET_SESSION_SCHEDULES_ERROR = "GET_SESSION_SCHEDULES_ERROR";

// ACTION CREATORS
const getSessionSchedulesBegin = () => {
  return {
    type: GET_SESSION_SCHEDULES_BEGIN
  };
};
const getSessionSchedulesSuccess = data => {
  return {
    type: GET_SESSION_SCHEDULES_SUCCESS,
    data
  };
};
const getSessionSchedulesError = error => {
  return {
    type: GET_SESSION_SCHEDULES_ERROR,
    error
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSION_SCHEDULES_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case GET_SESSION_SCHEDULES_SUCCESS:
      return {
        ...state,
        sessionSchedulesData: action.data,
        isLoading: false
      };
    case GET_SESSION_SCHEDULES_ERROR:
      return {
        ...state,
        errorMsg: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export const getSessionSchedules = () => async dispatch => {
  dispatch(getSessionSchedulesBegin());
  try {
    const data = await fetch(
      "https://r10app-95fea.firebaseio.com/sessions.json"
    );
    const res = await data.json();
    dispatch(getSessionSchedulesSuccess(res));
  } catch (error) {
    dispatch(() => getSessionSchedulesError(error));
  }
};
