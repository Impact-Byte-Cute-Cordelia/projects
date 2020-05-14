import axios from "axios";
import jwt from "jwt-decode";

export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";
var querystring = require("querystring");

export const setLogin = (data) => {
  return {
    type: LOG_IN,
    payload: data,
  };
};

export const setSignup = (data) => {
  return {
    type: SIGN_UP,
    payload: data,
  };
};

export const signin = (values, history, event) => (dispatch) => {
  event.preventDefault();
  console.log("cek", values, history);

  const email = values.email;
  const password = values.password;
  return axios
    .post(
      "https://backend-go-charity.herokuapp.com/login",
      querystring.stringify({ email, password })
    )
    .then((response) => {
      console.log(response);
      if (response.data.token !== undefined) {
        console.log("tes");
        localStorage.setItem("token", response.data.token);
        let decode = jwt(response.data.token);
        console.log("decode", decode);
        history.push("/");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signup = (values, history, event) => (dispatch) => {
  event.preventDefault();
  console.log("cek", values, history);
  const email = values.email;
  const password = values.password;
  return axios
    .post(
      "https://backend-go-charity.herokuapp.com/users",
      querystring.stringify({ email, password })
    )
    .then((response) => {
      console.log("this is response data signup", response.data);
      dispatch(setSignup(response.data.data));
      history.push("/signin");
    })
    .catch((error) => {
      console.log(error);
    });
};
