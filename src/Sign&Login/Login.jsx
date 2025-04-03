import axios from "axios";
import React, { useState } from "react";
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
            const res = await axios.post("http://localhost:8000/login", { email, password });
            if (res.data.token) {
                login(res.data.token);
                navigate("/dashboard");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed");
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="bg-black text-white cursor-pointer">Submit</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
    );
};

export default Login;
