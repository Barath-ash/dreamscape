import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Adjust the import path

const Logout = () => {
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8000/logout", {}, { withCredentials: true });

            localStorage.removeItem("token");
            setUser(null);
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
