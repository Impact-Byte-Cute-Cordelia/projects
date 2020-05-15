import axios from "axios";
import jwt from "jwt-decode";
const queryString = require("query-string");

// constanta
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";

// function actions
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

// function signup
export const signup = (values, history, event) => (dispatch) => {
  event.preventDefault();
  console.log("tes cek", values, history);
  const email = values.email;
  const password = values.password;
  return axios
    .post(
      "https://backend-go-charity.herokuapp.com/users",
      // query string digunakan untuk post form data
      queryString.stringify({ email, password })
    )
    .then((response) => {
      console.log(response);
      // kirim ke reducers
      dispatch(setSignup(response.data));
      history.push("/signin");
    })
    .catch((error) => {
      console.log(error);
    });
};

// function signin
export const signin = (values, history, event) => (dispatch) => {
  event.preventDefault();
  console.log("tes cek", values, history);
  const email = values.email;
  const password = values.password;
  return axios
    .post(
      "https://backend-go-charity.herokuapp.com/login",
      // query string digunakan untuk post form data
      queryString.stringify({ email, password })
    )
    .then((response) => {
      console.log(response);

      // check token
      if (response.data.token !== undefined) {
        console.log("oke ada token");
        // set localstorage
        localStorage.setItem("token", response.data.token);
        // decode token
        let decode = jwt(response.data.token);
        console.log("decode", decode);
        // kirim ke reducers
        dispatch(setSignIN(response.data));
        history.push("/");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
