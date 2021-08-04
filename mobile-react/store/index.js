import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { DETAIL_DOCTOR, SET_DOCTOR, SET_LOCATION } from "./actionType";

const initialState = {
  allLocation: [],
  allDoctor: [],
  detailDoctor: {},
};

function reducer(state = initialState, action) {
  if (action.type === SET_LOCATION) {
    return { ...state, allLocation: action.payload };
  } else if (action.type === SET_DOCTOR) {
    return { ...state, allDoctor: action.payload };
  } else if (action.type === DETAIL_DOCTOR) {
    return { ...state, detailDoctor: action.payload };
  } else {
    return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
