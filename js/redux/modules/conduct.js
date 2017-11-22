const initialState = {
  conductsData: [],
  isLoading: false
};

// ACTIONS
const GET_CONDUCTS_BEGIN = "GET_CONDUCTS_BEGIN";
const GET_CONDUCTS_SUCCESS = "GET_CONDUCTS_SUCCESS";
const GET_CONDUCTS_ERROR = "GET_CONDUCTS_ERROR";

// ACTION CREATORS
const getConductsBegin = () => {
  return {
    type: GET_CONDUCTS_BEGIN
  };
};
const getConductsSuccess = data => {
  return {
    type: GET_CONDUCTS_SUCCESS,
    data
  };
};
const getConductsError = error => {
  return {
    type: GET_CONDUCTS_ERROR,
    error
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONDUCTS_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case GET_CONDUCTS_SUCCESS:
      return {
        ...state,
        conductsData: action.data,
        isLoading: false
      };
    case GET_CONDUCTS_ERROR:
      return {
        ...state,
        errorMsg: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export const getConducts = () => async dispatch => {
  dispatch(getConductsBegin());
  try {
    const data = await fetch(
      "https://r10app-95fea.firebaseio.com/code_of_conduct.json"
    );
    const res = await data.json();
    dispatch(getConductsSuccess(res));
  } catch (error) {
    dispatch(() => getConductsError(error));
  }
};
