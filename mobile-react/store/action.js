import { DETAIL_DOCTOR, SET_DOCTOR, SET_LOCATION } from "./actionType";

export function setDoctor(input) {
  return {
    type: SET_DOCTOR,
    payload: input,
  };
}
export function setLocation(input) {
  return {
    type: SET_LOCATION,
    payload: input,
  };
}

export function setDetail(input) {
  return {
    type: DETAIL_DOCTOR,
    payload: input,
  };
}

export function fetchDoctor(page) {
  return (dispatch) => {
    fetch(`http://localhost:3000/doctor?_page=${page}}&_limit=10`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return dispatch(setDoctor(data));
      })
      .catch((err) => console.log(err));
  };
}

export function fetchDetail(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/doctor/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => dispatch(setDetail(data)))
      .catch((err) => console.log(err));
  };
}

export function fetchLocation() {
  return (dispatch) => {
    fetch(`http://localhost:3000/location`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => dispatch(setLocation(data)))
      .catch((err) => console.log(err));
  };
}
