import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("Arjun@gmail.com");
  const [password, setPassword] = useState("Arjun_1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        } //to make an api call and get cookies and tokens
      );

      // console.log("API Response:", res.data); // Debug API response
      // console.log("addUser function:", addUser);

      dispatch(addUser(res.data)); // Dispatching action
      // console.log("Redux Dispatch:", res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="card bg-base-300 w-96 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title mx-auto pb-5 text-[30px]">Login</h2>
          <label className="form-control w-full max-w-xs mb-10">
            <div className="label">
              <span className="label-text pb-2">Enter Your Email address</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text pb-2">Enter Your Password</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="btn btn-primary mt-10 w-[50%] mx-auto"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
