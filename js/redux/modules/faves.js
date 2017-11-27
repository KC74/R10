import { getFaves as allFaves } from "../../config/models";

const initialState = {
  favesData: [],
  isLoading: false
};

// ACTIONS
const GET_FAVES_BEGIN = "GET_FAVES_BEGIN";
const GET_FAVES_SUCCESS = "GET_FAVES_SUCCESS";
const GET_FAVES_ERROR = "GET_FAVES_ERROR";

// ACTION CREATORS
const getFavesBegin = () => {
  return {
    type: GET_FAVES_BEGIN
  };
};
const getFavesSuccess = data => {
  return {
    type: GET_FAVES_SUCCESS,
    data
  };
};
const getFavesError = error => {
  return {
    type: GET_FAVES_ERROR,
    error
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVES_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case GET_FAVES_SUCCESS:
      return {
        ...state,
        favesData: action.data,
        isLoading: false
      };
    case GET_FAVES_ERROR:
      return {
        ...state,
        errorMsg: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export const getFaves = () => async dispatch => {
  dispatch(getFavesBegin());
  try {
    const data = allFaves();
    dispatch(getFavesSuccess(data));
  } catch (error) {
    dispatch(() => getFavesError(error));
  }
};
