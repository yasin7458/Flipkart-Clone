
import { useNavigate } from "react-router-dom";
import {
    FaMobileAlt,
    FaTshirt,
    FaCouch,
    FaSpa,
    FaLaptop,
    FaShoppingBasket
} from "react-icons/fa";

function CategoryNavbar() {
    const navigate = useNavigate();

    const categories = [
        {
            name: "All Products",
            icon: <FaShoppingBasket />,
            value: ""
        },
        {
            name: "Mobiles",
            icon: <FaMobileAlt />,
            value: "Mobiles"
        },
        {
            name: "Electronics",
            icon: <FaLaptop />,
            value: "Electronics"
        },
        {
            name: "Fashion",
            icon: <FaTshirt />,
            value: "Fashion"
        },
        {
            name: "Home",
            icon: <FaCouch />,
            value: "Home"
        },
        {
            name: "Beauty",
            icon: <FaSpa />,
            value: "Beauty"
        }
    ];

    function handleCategory(category) {
        if (category === "") {
            navigate("/products");
        } else {
            navigate("/products?category=" + category);
        }
    }

    return (
        <section className="shop-category-section">
            <div className="shop-category-heading">
                <h2>Shop by Category</h2>
                <p>Find everything you love in one place.</p>
            </div>

            <div className="shop-category-list">
                {categories.map((category) => (
                    <button
                        className="shop-category-card"
                        key={category.name}
                        onClick={() => handleCategory(category.value)}
                    >
                        <span className="shop-category-icon">
                            {category.icon}
                        </span>

                        <span className="shop-category-name">
                            {category.name}
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default CategoryNavbar;
