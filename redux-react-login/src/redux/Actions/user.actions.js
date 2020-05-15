import axios from "axios";
import jwt from "jwt-decode";
const queryString = require("query-string");

// constanta
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";

export const setSignup = (data) => {
  return {
    type: SIGN_UP,
    payload: data,
  };
};

export const setSignIN = (data) => {
  return {
    type: SIGN_IN,
    payload: data,
  };
};

export const signin = (values, history, event) => (dispatch) => {
  event.preventDefault();
  console.log("tes cek", values, history);
  const email = values.email;
  const password = values.password;
  return axios
    .post(
      "https://backend-go-charity.herokuapp.com/login",
      queryString.stringify({ email, password })
    )
    .then((response) => {
      console.log(response);
      if (response.data.token !== undefined) {
        console.log("oke ada token");
        localStorage.setItem("token", response.data.token);
        let decode = jwt(response.data.token);
        console.log("decode", decode);
        dispatch(setSignIN(response.data));
        history.push("/");
      }
      // dispatch(setSignup(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signup = (values, history, event) => (dispatch) => {
  event.preventDefault();
  console.log("tes cek", values, history);
  const email = values.email;
  const password = values.password;
  return axios
    .post(
      "https://backend-go-charity.herokuapp.com/users",
      queryString.stringify({ email, password })
    )
    .then((response) => {
      console.log(response);
      dispatch(setSignup(response.data));
      history.push("/signin");
    })
    .catch((error) => {
      console.log(error);
    });
};
