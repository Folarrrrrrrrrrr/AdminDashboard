import { useEffect } from "react";
import { getToken, clearTokens } from "../../pages/admin/api_detaills/constant/local_storage";
import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!getToken()) {
            console.log("User not logged in, redirecting...");
            clearTokens();
            navigate("/"); // React Router navigation (prevents full page reload)
        }
    }, []);
};

export default useAuthCheck;

