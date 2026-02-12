import React, { useState } from "react";
import "./SignUp.css";
import { auth, googleProvide } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const signUp = async () => {
    setLoading(true);
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration is successfull");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const signUpWithGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvide);
      alert("Registration is successfull");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Novation Admin Panel</h1>
        <span>Sign up to start your session</span>
        <div className="signup-input-details">
          {/* <input type="file" name="" id="" placeholder="Your image" /> */}
          <input
            type="email"
            value={email}
            name=""
            id=""
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="signing-up-input-other-details">
          <button
            onClick={signUp}
            disabled={loading}
            className="signing-up-btn"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
          <button onClick={signUpWithGoogle} className="signing-up-google-btn">
            <FaGoogle className="google-icon" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
