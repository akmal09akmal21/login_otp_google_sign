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

// const PrivateRoute = ({ ...rest }) => {
//   const auth = JSON.parse(localStorage.getItem("token"));
//   // const auth = localStorage.getItem("token");

//   if (auth) {
//     if (auth.token) {
//       return <Route {...rest} />;
//     }
//   }

//   return <Navigate to="/login" />;
// };

// export default PrivateRoute;

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("token");

  // const { userInfo } = useSelector((state) => state.signIn);
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;

// const PrivateRoute = ({ ...rest }) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   console.log(token);

//   if (token) {
//     return <Route {...rest} />;
//   }

//   return <Navigate to="/login" />;
// };

// export default PrivateRoute;
// const token111 = () => {
//   const cookies = document.cookie;
//   if (cookies.includes("token")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = token111();
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };
// export default PrivateRoute;
