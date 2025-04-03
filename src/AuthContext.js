import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    async function checkSession() {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setUser(null);
                return;
            }

            const res = await axios.get("http://localhost:8000/check-session", {
                headers: { Authorization: `Bearer ${token}` },
                withCredentials: true, 
            });

            if (res.data.isAuthenticated) {
                setUser(res.data.email);
            } else {
                localStorage.removeItem("token");
                setUser(null);
            }
        } catch (error) {
            console.error("Session check failed:", error);
            localStorage.removeItem("token");
            setUser(null);
        }
    }

    useEffect(() => {
        checkSession();
    }, []);

    function login(token) {
        localStorage.setItem("token", token);
        checkSession();
    }

    return (
        <AuthContext.Provider value={{ user, login, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
