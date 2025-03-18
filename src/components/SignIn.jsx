import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";
import illustration from "../assets/illustration.svg";
import googleLogo from "../assets/google-logo.svg";
import commucareLogo from "../assets/commucare-logo.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password });
  };

  return (
    <div className="signin-container">
      <div className="signin-background"></div>

      <div className="signin-card">
        <div className="logo-container">
          <img src={commucareLogo} alt="CommuCare Ghana" className="commucare-logo" />
        </div>

        <div className="signin-left">
          <div className="illustration-container">
            <img src={illustration} alt="Community illustration" className="community-illustration" />
          </div>

          <h1 className="signin-title">Sign in to CommuCare</h1>

          <form onSubmit={handleSubmit}>
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

            <div className="forgot-password-container">
              <a href="/forgot-password" className="forgot-password">Forget Password?</a>
            </div>

            <div className="google-signin">
              <button type="button" className="google-button">
                <img src={googleLogo} alt="Google" className="google-icon" />
                Continue with Google
              </button>
            </div>

            <div className="signin-button-container">
              <button type="submit" className="signin-button">SIGN IN</button>
            </div>
          </form>
        </div>

        <div className="signin-right">
          <div className="welcome-content">
            <h2>Hello Friend!</h2>
            <p>Enter your personal details and start your journey with us</p>

            <div className="signup-button-container">
              <Link to="/" className="signup-button">SIGN UP</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
