import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/signup", { email, password });
            if (res.data.token) {
                login(res.data.token);
                navigate("/dashboard");
            } else {
                alert(res.data.message || "Signup failed");
            }
        } catch (error) {
            console.error("Signup failed:", error);
            alert("Signup failed. Check console for details.");
        }
    }

    return (
        <div className="Signup">
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="bg-black text-white cursor-pointer">Submit</button>
            </form>
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    );
};

export default Signup;
