import axios from "axios";

export const GET_DATA_BEGIN = "GET_DATA_BEGIN";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export function getDataBegin() {
  return {
    type: GET_DATA_BEGIN,
  };
}

export function getDataSuccess(result) {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
}

export function getDataFailed(error) {
  return {
    type: GET_DATA_FAILED,
    error,
  };
}

export function getDataDigimon() {
  return function (dispatch) {
    dispatch(getDataBegin());

    // axios.get("https://digimon-api.herokuapp.com/api/digimon")
    axios
      .get("https://5e8e9d60e0e7de001685f875.mockapi.io/digimon")
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
}

export function postDataDigimon(postObjectDigimon) {
  return function (dispatch) {
    dispatch(getDataBegin());

    // axios.get("https://digimon-api.herokuapp.com/api/digimon")
    axios
      .post(
        "https://5e8e9d60e0e7de001685f875.mockapi.io/digimon",
        postObjectDigimon
      )
      .then(() => dispatch(getDataDigimon()))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
}

export const deleteDataDigimon = (id) => {
  return function (dispatch) {
    dispatch(getDataBegin());
    axios
      .delete(`https://5e8e9d60e0e7de001685f875.mockapi.io/digimon/${id}`)
      .then(() => dispatch(getDataDigimon()))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
};
