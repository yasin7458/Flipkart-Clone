
import { useNavigate } from "react-router-dom";
import { FaBoxOpen, FaShoppingBag } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyOrders() {
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <div className="container py-5 text-center">
                <FaBoxOpen size={60} color="#7657d9" />

                <h2 className="mt-3">My Orders</h2>

                <p className="text-muted">
                    Your placed orders will appear here.
                </p>

                <button
                    className="btn btn-primary mt-2"
                    onClick={() => navigate("/products")}
                >
                    <FaShoppingBag /> Start Shopping
                </button>
            </div>

            <Footer />
        </>
    );
}

export default MyOrders;
