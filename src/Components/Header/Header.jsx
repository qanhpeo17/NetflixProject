import React, { useState, useEffect } from "react";
import img1 from "../img/580b57fcd9996e24bc43c529.png";
import "./Header.css";
function Header() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const btnStyle = {
    background: "rgb(229, 9, 20)",
    color: "#fff",
    padding: "1.4rem 1.5rem",
    borderRadius: "0.1875rem",
    border: "none",
    fontWeight: "600",
    letterSpacing: "1px",
    fontSize: "120%",
    transition: "all 0.3s",
  };
  const passwordInputStyle = {
    display: "flex",
    justifyContent: "Center",
  };
  const inputStyle = {
    width: "100%",
    filter: "opacity(100%)",
    color: "inherit",
    padding: "1rem 0.5rem",
    border: "2px solid #3c3c3c72",
    borderRadius: "5px",
    backgroundColor: "rgba(1, 1, 1, 0.518)",
    cursor: "pointer",
  };
  const inputPlaceholderStyle = {
    transition: "all 0.3s",
    fontSize: "medium",
    letterSpacing: "1px",
  };
  const inputPlaceholderHoverStyle = {
    letterSpacing: "2px",
  };

  const handleEmailClick = () => {
    setShowPasswordInput(true);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    localStorage.setItem("email", newEmail); // Store email in localStorage
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    localStorage.setItem("password", newPassword); // Store password in localStorage
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return; // Exit the function if any field is empty
    }

    // Save values to local storage or perform sign-up logic
    // For this example, let's just log the email and password
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Sign up successful!");
  };

  return (
    <div className="headerComponent">
      <div className="container">
        <div className="header">
          <img className="logo" src={img1} alt="" />
          <div className="signinLink">
            <a href="/Signin">Sign In</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="titles">
            <div className="hero-title">
              Unlimited movies, TV shows, and more
            </div>
            <div className="hero-subtitle">Watch anywhere. Cancel anytime.</div>
          </div>
          <div className="inputWrapper">
            <h3 className="inputTitle">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="inputChildWrapper">
              <div className="inputEmail">
                <input
                  type="email-input"
                  name="email-input"
                  id="email-input"
                  value={email}
                  onClick={handleEmailClick}
                  onChange={handleEmailChange}
                  style={{
                    ...inputStyle,

                    ...inputPlaceholderStyle,
                    ...inputPlaceholderHoverStyle,
                  }}
                  placeholder="Email address"
                  required
                />
              </div>
              {showPasswordInput && (
                <div>
                  <div className="inputPassword">
                    <input
                      type="password"
                      id="password-input"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Password"
                      style={{
                        ...inputStyle,

                        ...inputPlaceholderStyle,
                        ...inputPlaceholderHoverStyle,
                      }}
                      required
                    />
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="submitBtn"
                onClick={handleSubmit}
              >
                Get Started!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
