import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import { useAuth } from "../AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import imgl from "../DS_images/login.jpg";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:8000/login", user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name);
      login(data.token);
      toast.success("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed!");
    }
    setLoading(false);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${imgl})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative bg-[#EDE0D4] p-8 rounded-xl shadow-xl w-96 border border-[#C6A484]">
        <h2 className="text-3xl font-bold text-center text-[#5B423A] mb-6 font-[Merriweather]">Welcome Back, Explorer!</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-3 rounded-md bg-[#FAF3EB] text-[#5B423A] border border-[#C6A484] focus:outline-none focus:ring-2 focus:ring-[#A67C52] placeholder-[#5B423A] transition-all duration-300 hover:scale-[1.02]" />
          
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" required onChange={handleChange} className="w-full p-3 rounded-md bg-[#FAF3EB] text-[#5B423A] border border-[#C6A484] focus:outline-none focus:ring-2 focus:ring-[#A67C52] placeholder-[#5B423A] transition-all duration-300 hover:scale-[1.02]" />
            <span className="absolute right-3 top-3 cursor-pointer text-[#5B423A]" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <button type="submit" className="w-full p-3 rounded-md bg-[#A67C52] text-white font-bold hover:bg-[#8B5E3C] transition-all duration-300 transform hover:scale-[1.05]">
            {loading ? <ProgressBar height="30" width="30" color="white" /> : "Continue Journey"}
          </button>
        </form>

        <p className="text-center text-[#5B423A] mt-4 font-[Poppins]">
          New traveler? <Link to="/signup" className="text-[#A67C52] hover:underline">Join Now</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
