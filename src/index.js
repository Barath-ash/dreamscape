import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DisplayPage from "./DisplayPage";
import Detail from "./Details";
import Payment from "./Payment Component/Payment";
import Login from "./Sign&Login/Login";
import Signup from "./Sign&Login/Signup";
import Logout from "./Sign&Login/Logout";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./Sign&Login/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import "./index.css";
import Contact from "./Main Components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<ProtectedRoute><App /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/main" element={<ProtectedRoute><DisplayPage /></ProtectedRoute>} />
          <Route path="/details" element={<ProtectedRoute><Detail /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
