
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FaArrowLeft, FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";

import Header from "../components/Header";
import { addToCart } from "../redux/actions/cartActions";
import { addToWishlist } from "../redux/actions/wishlistActions";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id)
            .then((res) => {
                setProduct(res.data);
            });
    }, [id]);

    return (
        <>
            <Header />

            <div className="container py-5">
                <button className="btn btn-light mb-4" onClick={() => navigate("/products")}>
                    <FaArrowLeft /> Back to Products
                </button>

                {product && (
                    <div className="row g-5 align-items-center">
                        <div className="col-md-6">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="img-fluid rounded-4 w-100"
                                style={{ maxHeight: "450px", objectFit: "contain" }}
                            />
                        </div>

                        <div className="col-md-6">
                            <span className="badge text-bg-light mb-3">{product.category}</span>
                            <h1>{product.name}</h1>

                            <p className="mt-3">
                                <span className="badge text-bg-success">
                                    {product.rating} <FaStar />
                                </span>
                                <span className="text-muted ms-2">
                                    {product.reviews} reviews
                                </span>
                            </p>

                            <h2 className="my-4">
                                ₹{product.price.toLocaleString("en-IN")}
                                <del className="text-muted fs-5 ms-3">
                                    ₹{product.originalPrice.toLocaleString("en-IN")}
                                </del>
                            </h2>

                            <p className="text-muted">
                                Discover quality and value with this ShopKart product.
                            </p>

                            <button
                                className="btn btn-primary me-2 mb-2"
                                onClick={() => dispatch(addToCart(product))}
                            >
                                <FaShoppingCart /> Add to Cart
                            </button>

                            <button
                                className="btn btn-outline-danger mb-2"
                                onClick={() => dispatch(addToWishlist(product))}
                            >
                                <FaHeart /> Add to Wishlist
                            </button>

                            <div className="mt-4">
                                <button className="btn btn-outline-secondary" onClick={() => navigate("/cart")}>
                                    View Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductDetails;
