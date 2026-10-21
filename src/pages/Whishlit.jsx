
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrash, FaArrowLeft } from "react-icons/fa";

import Header from "../components/Header";
import { addToCart } from "../redux/actions/cartActions";
import { removeFromWishlist } from "../redux/actions/wishlistActions";

function Wishlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlist = useSelector((state) => state.wishlist);

    return (
        <>
            <Header />

            <div className="container py-4">
                <button className="btn btn-light mb-4" onClick={() => navigate("/")}>
                    <FaArrowLeft /> Continue Shopping
                </button>

                <h2 className="mb-2">My Wishlist <FaHeart color="#e74c75" /></h2>
                <p className="text-muted">Your favorite products in one place.</p>

                {wishlist.length === 0 ? (
                    <div className="text-center py-5">
                        <FaHeart size={55} color="#e74c75" />
                        <h3 className="mt-3">Your wishlist is empty</h3>
                        <p>Add products you love to your wishlist.</p>
                        <button className="btn btn-primary" onClick={() => navigate("/products")}>
                            Explore Products
                        </button>
                    </div>
                ) : (
                    <div className="row g-4 mt-2">
                        {wishlist.map((product) => (
                            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                                <div className="shop-product-card h-100">
                                    <div className="shop-product-image">
                                        <img src={product.image} alt={product.name} />
                                    </div>

                                    <div className="shop-product-info">
                                        <h3>{product.name}</h3>
                                        <p>{product.category}</p>
                                        <div className="shop-product-price">
                                            <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                                            <del>₹{product.originalPrice.toLocaleString("en-IN")}</del>
                                        </div>

                                        <button
                                            className="shop-add-cart-btn"
                                            onClick={() => dispatch(addToCart(product))}
                                        >
                                            <FaShoppingCart /> Add to Cart
                                        </button>

                                        <button
                                            className="btn btn-outline-danger w-100 mt-2"
                                            onClick={() => dispatch(removeFromWishlist(product.id))}
                                        >
                                            <FaTrash /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Wishlist;
