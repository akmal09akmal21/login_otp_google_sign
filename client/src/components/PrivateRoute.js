import React from "react";
import { Navigate, Route } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   console.log(token.token);

//   if (token) {
//     if (token.token) {
//       return children;
//     }
//   }
//   return <Navigate to="/login" />;
// };

// export default PrivateRoute;

const PrivateRoute = ({ ...rest }) => {
  const auth = JSON.parse(localStorage.getItem("token"));
  console.log(auth);
  if (auth) {
    if (auth.token) {
      return <Route {...rest} />;
    }
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
