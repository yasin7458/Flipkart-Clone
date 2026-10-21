import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaStore
} from "react-icons/fa";

import { logout } from "../redux/actions/authActions";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  let cartCount = 0;

  cart.map((item) => {
    cartCount = cartCount + (item.quantity || 1);
  });

  let wishlistCount = wishlist.length;

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    dispatch(logout());

    navigate("/login");
    setMenuOpen(false);
  }

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate("/products?search=" + encodeURIComponent(search.trim()));
      setMenuOpen(false);
    }
  }

  return (
    <header className="shop-header">
      <div className="container-fluid px-lg-5">
        <div className="shop-header-main">

          <button
            className="shop-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className="shop-logo"
            onClick={() => navigate("/")}
          >
            <span className="shop-logo-icon">
              <FaStore />
            </span>

            <span>
              Shop<span>Kart</span>
              <small>Happy shopping, every day</small>
            </span>
          </div>

          <form
            className="shop-search"
            onSubmit={handleSearch}
          >
            <FaSearch className="shop-search-icon" />

            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <button type="submit">
              Search
            </button>
          </form>

          <div className="shop-header-actions">

            {isAuthenticated && user && (
              <div className="shop-user">
                <img src={user.image} alt={user.name} />
                <span>Hi, {user.name}</span>
              </div>
            )}

            <button
              className="shop-action-btn shop-count-action"
              onClick={() => navigate("/wishlist")}
              aria-label={`Wishlist, ${wishlistCount} items`}
            >
              <span className="shop-count-icon">
                <FaHeart />

                {wishlistCount > 0 && (
                  <span className="shop-count-badge">
                    {wishlistCount}
                  </span>
                )}
              </span>

              <span>Wishlist</span>
            </button>

            <button
              className="shop-action-btn shop-count-action"
              onClick={() => navigate("/cart")}
              aria-label={`Cart, ${cartCount} items`}
            >
              <span className="shop-count-icon">
                <FaShoppingCart />

                {cartCount > 0 && (
                  <span className="shop-count-badge">
                    {cartCount}
                  </span>
                )}
              </span>

              <span>Cart</span>
            </button>

            {isAuthenticated && (
              <button
                className="shop-logout-btn"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>

        <nav
          className={`shop-category-nav ${menuOpen ? "show" : ""}`}
        >
          <button onClick={() => navigate("/")}>
            Home
          </button>

          <button onClick={() => navigate("/products")}>
            All Products
          </button>

          <button
            onClick={() => navigate("/products?category=Electronics")}
          >
            Electronics
          </button>

          <button
            onClick={() => navigate("/products?category=Fashion")}
          >
            Fashion
          </button>

          <button
            onClick={() => navigate("/products?category=Home")}
          >
            Home & Furniture
          </button>

          <button
            onClick={() => navigate("/products?category=Beauty")}
          >
            Beauty
          </button>

          <button onClick={() => navigate("/my-orders")}>
            My Orders
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
