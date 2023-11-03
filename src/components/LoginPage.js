import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../features/cartSlice";
import "./login.css";

export const userData = [
  {
    id: 1,
    name: "Kapil Thakur",
    contact: "123456789",
    address: "Bhopal",
    birth: "1-10-2000",
    username: "kapil@123",
    password: "123",
  },
];

const LoginPage = () => {
  // const allCart = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidUser(username, password)) {
      dispatch(login({ ...userData }));

      navigate("/home");
      // localStorage.setItem("allCart", "allCart");
    } else {
      alert("Please fill the correct details..");
    }
  };

  const isValidUser = (username, password) => {
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      return true;
    }
    return false;
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "30px" }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
