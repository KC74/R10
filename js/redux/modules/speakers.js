import { formatDataObject } from "../resources/jsonHelpers";

const initialState = {
  speakerData: {},
  isLoading: false
};

// ACTIONS
const GET_SPEAKER_BEGIN = "GET_SPEAKER_BEGIN";
const GET_SPEAKER_SUCCESS = "GET_SPEAKER_SUCCESS";
const GET_SPEAKER_ERROR = "GET_SPEAKER_ERROR";

// ACTION CREATORS
const getSpeakerBegin = () => {
  return {
    type: GET_SPEAKER_BEGIN
  };
};
const getSpeakerSuccess = data => {
  return {
    type: GET_SPEAKER_SUCCESS,
    data
  };
};
const getSpeakerError = error => {
  return {
    type: GET_SPEAKER_ERROR,
    error
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SPEAKER_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case GET_SPEAKER_SUCCESS:
      return {
        ...state,
        speakerData: action.data,
        isLoading: false
      };
    case GET_SPEAKER_ERROR:
      return {
        ...state,
        errorMsg: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export const getSpeaker = speakerID => async dispatch => {
  dispatch(getSpeakerBegin());
  try {
    const data = await fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${
        speakerID
      }"`
    );
    const res = await data.json();
    dispatch(getSpeakerSuccess(formatDataObject(res)));
  } catch (error) {
    dispatch(() => getSpeakerError(error));
  }
};
