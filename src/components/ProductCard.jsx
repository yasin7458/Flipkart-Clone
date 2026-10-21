
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/actions/cartActions";
import {
    addToWishlist,
    removeFromWishlist
} from "../redux/actions/wishlistActions";

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const wishlist = useSelector((state) => state.wishlist);

    const isInWishlist = wishlist.some(
        (item) => String(item.id) === String(product.id)
    );

    function handleAddToCart() {
        dispatch(addToCart(product));
    }

    function handleWishlist() {
        if (isInWishlist) {
            dispatch(removeFromWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    }

    return (
        <div className="shop-product-card">
            <button
                className={`shop-product-wishlist ${isInWishlist ? "liked" : ""}`}
                onClick={handleWishlist}
                aria-label="Toggle wishlist"
            >
                <FaHeart />
            </button>

            <div className="shop-product-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="shop-product-info">
                <h3>{product.name}</h3>

                <div className="shop-product-rating">
                    <span>
                        {product.rating} <FaStar />
                    </span>
                    <small>({product.reviews} reviews)</small>
                </div>

                <div className="shop-product-price">
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <del>₹{product.originalPrice.toLocaleString("en-IN")}</del>
                </div>

                <button
                    className="shop-add-cart-btn"
                    onClick={handleAddToCart}
                >
                    <FaShoppingCart />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
