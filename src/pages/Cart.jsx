
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    FaTrash,
    FaPlus,
    FaMinus,
    FaShoppingBag,
    FaArrowLeft,
    FaLock
} from "react-icons/fa";

import {
    removeFromCart,
    updateCartQuantity
} from "../redux/actions/cartActions";

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);

    let totalPrice = 0;
    let totalItems = 0;

    cart.map((product) => {
        totalPrice = totalPrice + product.price * product.quantity;
        totalItems = totalItems + product.quantity;
    });

    function increaseQuantity(product) {
        dispatch(
            updateCartQuantity(product.id, product.quantity + 1)
        );
    }

    function decreaseQuantity(product) {
        if (product.quantity > 1) {
            dispatch(
                updateCartQuantity(product.id, product.quantity - 1)
            );
        }
    }

    function handleRemove(id) {
        dispatch(removeFromCart(id));
    }

    return (
        <div className="shop-cart-page">
            <div className="container py-4 py-lg-5">

                <button
                    className="shop-cart-back"
                    onClick={() => navigate("/")}
                >
                    <FaArrowLeft />
                    Continue Shopping
                </button>

                <div className="shop-cart-heading">
                    <div>
                        <h1>My Shopping Cart</h1>
                        <p>
                            You have {totalItems} item(s) in your cart.
                        </p>
                    </div>

                    <div className="shop-cart-heading-icon">
                        <FaShoppingBag />
                    </div>
                </div>

                {cart.length === 0 ? (
                    <div className="shop-empty-cart">
                        <div className="shop-empty-cart-icon">
                            <FaShoppingBag />
                        </div>

                        <h2>Your cart is empty!</h2>

                        <p>
                            Looks like you haven't added anything to your cart yet.
                        </p>

                        <button
                            className="shop-cart-shop-btn"
                            onClick={() => navigate("/products")}
                        >
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <div className="row g-4">

                        <div className="col-lg-8">
                            <div className="shop-cart-products">

                                {cart.map((product) => (
                                    <div
                                        className="shop-cart-item"
                                        key={product.id}
                                    >
                                        <div className="shop-cart-product-image">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                            />
                                        </div>

                                        <div className="shop-cart-product-info">
                                            <h3>{product.name}</h3>

                                            <p>{product.category}</p>

                                            <strong>
                                                ₹{product.price.toLocaleString("en-IN")}
                                            </strong>

                                            <div className="shop-cart-quantity">
                                                <button
                                                    onClick={() => decreaseQuantity(product)}
                                                    disabled={product.quantity === 1}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <FaMinus />
                                                </button>

                                                <span>{product.quantity}</span>

                                                <button
                                                    onClick={() => increaseQuantity(product)}
                                                    aria-label="Increase quantity"
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="shop-cart-item-right">
                                            <strong>
                                                ₹{(product.price * product.quantity).toLocaleString("en-IN")}
                                            </strong>

                                            <button
                                                className="shop-cart-remove"
                                                onClick={() => handleRemove(product.id)}
                                            >
                                                <FaTrash />
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="shop-cart-summary">
                                <h2>Order Summary</h2>

                                <div className="shop-summary-row">
                                    <span>Total Items</span>
                                    <span>{totalItems}</span>
                                </div>

                                <div className="shop-summary-row">
                                    <span>Subtotal</span>
                                    <span>
                                        ₹{totalPrice.toLocaleString("en-IN")}
                                    </span>
                                </div>

                                <div className="shop-summary-row">
                                    <span>Delivery</span>
                                    <span className="shop-free-delivery">
                                        FREE
                                    </span>
                                </div>

                                <div className="shop-summary-divider"></div>

                                <div className="shop-summary-total">
                                    <span>Total Amount</span>
                                    <strong>
                                        ₹{totalPrice.toLocaleString("en-IN")}
                                    </strong>
                                </div>

                                <button
                                    className="shop-checkout-btn"
                                    onClick={() => alert("Checkout will be added in the next step!")}
                                >
                                    <FaLock />
                                    Proceed to Checkout
                                </button>

                                <p className="shop-cart-secure">
                                    Secure shopping with ShopKart
                                </p>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default Cart;
