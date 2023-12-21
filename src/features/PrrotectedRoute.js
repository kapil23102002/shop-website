import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  // const isAuthenticated = useSelector((state) => state.allCart.isAuthenticated);
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthentication"));
  return isAuthenticated ? children : <Navigate to="/" />;
};

const ProtectedLoginRoute = ({ children }) => {
  // const isAuthenticated = useSelector((state) => state.allCart.isAuthenticated);
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthentication"));
  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export { ProtectedRoute, ProtectedLoginRoute };
