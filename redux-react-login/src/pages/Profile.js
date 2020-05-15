// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";

// import jwt from "jwt-decode";
// import Axios from "axios";
// // import axios from "axios";
// // const queryString = require("query-string");

// function Profile() {
//   const history = useHistory();
//   // const dispatch = useDispatch();

//   // check state redux isLogged
//   const isLogged = useSelector((state) => state.user);
//   console.log("isLogged", isLogged);

//   let decode = jwt(localStorage.getItem("token"));
//   console.log("decode", decode);
//   useEffect(() => {
//     Axios.get("asdadada/${decode.id}");
//     return () => {
//       cleanup;
//     };
//   }, [input]);

//   return (
//     <div>
//       <h1>Profile</h1>
//     </div>
//   );
// }

// export default Profile;
