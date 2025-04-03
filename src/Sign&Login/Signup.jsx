import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import imgs from "../DS_images/signup.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:8000/signup", user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name);
      login(data.token);
      toast.success("Signup Successful!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup Failed!");
    }
    setLoading(false);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${imgs})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative bg-[#f2e0c2] bg-opacity-90 backdrop-blur-sm p-8 rounded-xl shadow-lg w-96 border border-[#c7a17a]">
        <h2 className="text-3xl font-bold text-center text-[#5a3e2b] mb-6 font-['Merriweather']">Start Your Journey</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="w-full p-3 rounded-md bg-[#f7ead1] text-[#5a3e2b] border border-[#c7a17a] focus:outline-none focus:ring-2 focus:ring-[#8d6c4d] placeholder-[#8d6c4d] transition-all duration-300 hover:scale-[1.02]" />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-3 rounded-md bg-[#f7ead1] text-[#5a3e2b] border border-[#c7a17a] focus:outline-none focus:ring-2 focus:ring-[#8d6c4d] placeholder-[#8d6c4d] transition-all duration-300 hover:scale-[1.02]" />
          
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" required onChange={handleChange} className="w-full p-3 rounded-md bg-[#f7ead1] text-[#5a3e2b] border border-[#c7a17a] focus:outline-none focus:ring-2 focus:ring-[#8d6c4d] placeholder-[#8d6c4d] transition-all duration-300 hover:scale-[1.02]" />
            <span className="absolute right-3 top-3 cursor-pointer text-[#5a3e2b]" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <button type="submit" className="w-full p-3 rounded-md bg-[#8d6c4d] hover:bg-[#7b5a3e] text-white font-bold transition-all duration-300 transform hover:scale-[1.05]">
            {loading ? "Processing..." : "Join Now"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
