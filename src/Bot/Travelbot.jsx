import React, { useState } from "react";
import { motion } from "framer-motion";

const TravelBot = () => {
  // Predefined Travel-related Questions & Answers
  const travelFAQs = {
    "book a flight?":
      "To book a flight, enter your destination and dates on our homepage, then follow the booking steps.",
    " cancel my booking?":
      "Yes, you can cancel your booking from the 'My Bookings' section. Cancellation policies may apply.",
    "  refund  ?":
      "Refunds typically take 5-7 business days depending on your payment method.",
    " best travel destinations?":
      "Popular destinations include Paris, Bali, Tokyo, and Dubai. Check our blog for more!",
     " hotel bookings?":
      "Yes, we offer hotel and flight packages for the best travel experience.",
    "  contact customer support?":
      "You can reach customer support at support@travelwebsite.com or call +1 234 567 890.",
  };

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I assist you with your travel plans?", sender: "bot" },
    { text: " You can ask questions related to flights, hotels, and more.", sender: "bot" },
    
  ]);
  const [input, setInput] = useState("");

  // Handle user input
  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const botResponse =
      travelFAQs[userMessage] || "I couldn't find an answer. Contact support at support@travelwebsite.com.";

    setMessages([...messages, { text: userMessage, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {/* Chat Icon */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        onClick={() => setChatOpen(!chatOpen)}
      >
        ✈️
      </motion.button>

      {/* Chat Box */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="w-80 bg-white rounded-lg shadow-lg mt-3"
        >
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h2 className="text-lg font-bold">Travel Assistant</h2>
            <button onClick={() => setChatOpen(false)} className="text-xl">❌</button>
          </div>

          <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.sender === "bot" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-2 rounded-lg text-sm ${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-gray-800 self-start"
                    : "bg-blue-500 text-white self-end"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>

          <div className="flex p-3 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 p-2 border rounded-lg text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-600 text-white p-2 rounded-lg"
            >
              ➤
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TravelBot;
