import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userinfo = JSON.parse(localStorage.getItem("token"));

  return userinfo.token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
