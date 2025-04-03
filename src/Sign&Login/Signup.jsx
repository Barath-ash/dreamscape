import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });

      if (res.data === "Exist") {
        alert("User already exists");
      } else if (res.data === "User Created") {
        navigate("/Dashboard", { state: { id: email } });
      }
    } catch (error) {
      alert("Error occurred while signing up");
      console.error("Error:", error);
    }
  }

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Enter your Email ID:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-black text-white cursor-pointer">
          Submit
        </button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
