
import { useNavigate } from "react-router-dom";
import { FaExclamationCircle, FaHome } from "react-icons/fa";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="container text-center py-5">
            <FaExclamationCircle size={75} color="#7657d9" />

            <h1 className="display-4 fw-bold mt-3">404</h1>
            <h3>Page Not Found</h3>

            <p className="text-muted">
                Sorry, the page you are looking for does not exist.
            </p>

            <button className="btn btn-primary mt-2" onClick={() => navigate("/")}>
                <FaHome /> Back to Home
            </button>
        </div>
    );
}

export default NotFound;
