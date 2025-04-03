import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("token") ? { token: localStorage.getItem("token") } : null);

    const login = (token) => {
      localStorage.setItem("token", token);
      setUser({ token });
    };

 // Logout function
 const logout = () => {
  localStorage.removeItem("token");
  setUser(null);
 };

 useEffect(() => {
  if (localStorage.getItem("token")) setUser(true);
 }, []);

 return (
  <AuthContext.Provider value={{ user, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);
