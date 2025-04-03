import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');

  async function submit(e){
    e.preventDefault();
    try{
        await axios.post("http://localhost:8000/",{
            Email,Pass
        })
    }catch(e){
        console.log(e);

    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form action="POST">
        <input
          type="email"
          placeholder="Enter your Email ID:"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your Password:"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <input type="submit" onClick={submit}/>
      </form>
      <br />
      <p>OR</p>
      <br />
      <p>Do not have account create here --{">"} <Link to={"/signup"}>Signup</Link></p>
    </div>
  );
};

export default Login;
