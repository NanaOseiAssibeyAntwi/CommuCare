import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import illustration from "../assets/illustration.svg"; // Corrected path
import googleLogo from "../assets/google-logo.svg"; // Corrected path
import commucareLogo from "../assets/commucare-logo.svg"; // Corrected path

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted with:", { name, email, password });
  };

  return (
    <div className="signup-container">
      <div className="signup-background">
        {/* Background curved shapes will be handled in CSS */}
      </div>

      <div className="signup-card">
        <div className="signup-left">
          <div className="logo-container">
            <img src={commucareLogo} alt="CommuCare Ghana" className="commucare-logo" />
          </div>

          <div className="welcome-content">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please log in with your info</p>

            <div className="signin-button-container">
              <Link to="/signin" className="signin-link-button">SIGN IN</Link>
            </div>
          </div>
        </div>

        <div className="signup-right">
          <div className="illustration-container">
            <img src={illustration} alt="Community illustration" className="community-illustration" />
          </div>

          <h1 className="signup-title">Create Account</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="google-signin">
              <button type="button" className="google-button">
                <img src={googleLogo} alt="Google" className="google-icon" />
                Continue with Google
              </button>
            </div>

            <div className="signup-button-container">
              <button type="submit" className="signup-button">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
