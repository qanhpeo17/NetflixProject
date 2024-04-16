import React, { useState, useEffect } from "react";
import "../LoginComponent/loginInterface.css";
import img1 from "../img/580b57fcd9996e24bc43c529.png";

function LoginInterface() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      setAuthenticated(true);
    }
  }, []);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Retrieve saved credentials from local storage
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    // Check if entered credentials match saved credentials
    if (email === savedEmail && password === savedPassword) {
      setAuthenticated(true);
      alert("Sign in successful!");
    } else {
      alert("Invalid username or password!");
    }
  };
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="header">
          <a href="/">
            <img className="Logo" src={img1} alt="" />
          </a>
        </div>
        <div className="loginForm">
          <div className="logininputWrapper">
            <h1 className="title">Sign In</h1>
            <div className="input1">
              <input
                type="text"
                name=""
                id=""
                value={email}
                onChange={handleEmailChange}
                className="email-phone-input"
                placeholder="Email or phone number"
              />
            </div>
            <div className="input2">
              <input
                type="password"
                name=""
                id=""
                value={password}
                onChange={handlePasswordChange}
                className="password-input"
                placeholder="Password"
              />
            </div>
            <div className="submitBtn" onClick={handleSignIn}>
              Sign In
            </div>
            <div className="signupLinkWrapper">
              New to Netflix?
              <a className="signupLink" href="/">
                Sign up now.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginInterface;
