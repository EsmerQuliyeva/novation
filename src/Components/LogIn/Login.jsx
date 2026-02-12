import React, { useState, useEffect } from "react";
import "./Login.css";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";

const Login = () => {
  useEffect(() => {
    const storedEmail = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (storedRememberMe) {
      setEmail(storedEmail || "");
      setPassword(storedPassword || "");
      setRememberMe(true);
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Login successful:", user);
      navigate("/"); // istədiyin səhifəyə yönləndir
    } catch (error) {
      setError(error.message);
    }
    if (rememberMe) {
      localStorage.setItem("username", email);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", true);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }
  };
  function togglePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Novation Admin Panel</h1>
        <span>Sign in to start your session</span>
        <form onSubmit={handleLogin} className="login-input-details">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <span className="password-eye-icon" onClick={togglePassword}>
              {showPassword ? <IoEyeOutline /> : <LuEyeClosed />}
            </span>
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              name=""
              id=""
              className="remember-me-input"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </div>
          <button type="submit">Sign in</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
