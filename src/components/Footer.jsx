
import { Link } from "react-router-dom";
import { FaShoppingBag, FaHeart, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="mt-5 pt-5 pb-3" style={{ background: "#242232", color: "#ffffff" }}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4">
                        <h3 className="fw-bold">
                            <FaShoppingBag /> ShopKart
                        </h3>
                        <p className="text-white-50 mt-3">
                            Your favorite products, great prices, and a better shopping experience.
                        </p>
                    </div>

                    <div className="col-6 col-md-4">
                        <h5 className="fw-bold">Quick Links</h5>
                        <div className="d-flex flex-column gap-2 mt-3">
                            <Link className="text-white-50 text-decoration-none" to="/">Home</Link>
                            <Link className="text-white-50 text-decoration-none" to="/products">Products</Link>
                            <Link className="text-white-50 text-decoration-none" to="/cart">My Cart</Link>
                            <Link className="text-white-50 text-decoration-none" to="/wishlist">Wishlist</Link>
                            <Link className="text-white-50 text-decoration-none" to="/my-orders">My Orders</Link>
                        </div>
                    </div>

                    <div className="col-6 col-md-4">
                        <h5 className="fw-bold">Contact</h5>
                        <p className="text-white-50 mt-3">
                            <FaEnvelope /> support@shopkart.example
                        </p>
                        <p className="text-white-50">
                            <FaHeart /> Made for your shopping needs.
                        </p>
                    </div>
                </div>

                <hr className="border-secondary mt-4" />

                <p className="text-center text-white-50 mb-0">
                    © {new Date().getFullYear()} ShopKart. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
