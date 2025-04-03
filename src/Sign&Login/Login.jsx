import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; 

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/login", { email, password });
            if (res.data.message === "Success") {
                login(res.data.token);
                navigate("/dashboard");
            } else {
                alert(res.data);
            }
        } catch (e) {
            alert("Error logging in");
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
    );
};

export default Login;
