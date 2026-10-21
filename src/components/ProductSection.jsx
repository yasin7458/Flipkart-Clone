
import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

function ProductSection() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                setProducts(res.data);
            });
    }, []);

    return (
        <section className="shop-product-section">
            <div className="shop-product-heading">
                <div>
                    <h2>Trending Products</h2>
                    <p>Our popular picks, just for you.</p>
                </div>
            </div>

            <div className="row g-4">
                {products.map((product) => (
                    <div
                        className="col-6 col-md-4 col-lg-3"
                        key={product.id}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductSection;
