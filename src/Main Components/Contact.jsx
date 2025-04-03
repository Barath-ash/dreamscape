import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // For redirecting to the dashboard

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Clear error when user types
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError("⚠️ All fields are required!");
            return;
        }

        setSuccess(true);

        setTimeout(() => {
            setSuccess(false);
            navigate("/dashboard"); // Redirect to the dashboard after success
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-700 flex items-center justify-center p-6">
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-gray-900 shadow-2xl rounded-2xl p-8 max-w-2xl w-full border border-gray-700"
            >
                <h2 className="text-4xl font-extrabold text-indigo-400 text-center">🌍 Contact Us</h2>
                <p className="text-center text-gray-400 mt-2">
                    Have questions? We're here to help!
                </p>

                {error && (
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                        className="text-red-500 font-semibold mt-3 text-center"
                    >
                        {error}
                    </motion.p>
                )}

                {success && (
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                        className="text-green-400 font-semibold mt-3 text-center"
                    >
                        ✅ Message sent successfully! Redirecting...
                    </motion.p>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-gray-300 font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 border border-gray-600 bg-gray-800 rounded-lg text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 border border-gray-600 bg-gray-800 rounded-lg text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-semibold">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 mt-1 border border-gray-600 bg-gray-800 rounded-lg text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg px-6 py-3 rounded-lg shadow-lg transition-all duration-300 w-full"
                    >
                        Send Message ✈️
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
