import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector(
        (state) => state.auth.isAuthenticated
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login")
        }
    }, [isAuthenticated, navigate])

    if (isAuthenticated) {
        return children;
    }

    return null;
}

export default ProtectedRoute;