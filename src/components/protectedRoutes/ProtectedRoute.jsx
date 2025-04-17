import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.auth.user); // Get user from Redux state
    {console.log(user);
    }
    return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
