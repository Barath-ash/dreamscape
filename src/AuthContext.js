import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkSession() {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setUser(null);
                    setLoading(false);
                    return;
                }

                const res = await axios.get("http://localhost:8000/check-session", {
                    headers: { Authorization: `Bearer ${token}` },
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
            setLoading(false);
        }

        checkSession();
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setUser(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
