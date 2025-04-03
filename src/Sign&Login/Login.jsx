import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", 
        { email, password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        login(res.data.token);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed");
      console.log(error);
    }
  }

  // Auto-login check on refresh
  useEffect(() => {
    async function checkSession() {
      try {
        const res = await axios.get("http://localhost:8000/check-session", { withCredentials: true });
        if (res.data.isAuthenticated) {
          login(res.data.token);
          navigate("/dashboard");
        }
      } catch (error) {
        console.log("Session expired, please log in again.");
      }
    }
    checkSession();
  }, []);

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={submit} className="bg-black text-white cursor-pointer">
          Submit
        </button>
      </form>
      <p>OR</p>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
};

export default Login;
