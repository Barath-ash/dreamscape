import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/signup", 
        { email, password }, 
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token); // Store token
        nav("/dashboard");
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (error) {
      alert("Signup failed. Please try again.");
      console.log(error);
    }
  }

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your Email ID"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-black text-white cursor-pointer">
          Submit
        </button>
      </form>
      <p>OR</p>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Signup;
