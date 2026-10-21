
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Sorting from "../components/Sorting";

function Products() {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState("default");
    const [searchParams] = useSearchParams();

    let category = searchParams.get("category");
    let searchText = searchParams.get("search");

    let filteredProducts = products;

    if (category && category !== "All Products") {
        filteredProducts = filteredProducts.filter((product) => {
            return product.category.toLowerCase() === category.toLowerCase();
        });
    }

    if (searchText) {
        filteredProducts = filteredProducts.filter((product) => {
            return (
                product.name.toLowerCase().includes(searchText.toLowerCase()) ||
                product.category.toLowerCase().includes(searchText.toLowerCase())
            );
        });
    }

    if (sortBy === "lowToHigh") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
    }

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                setProducts(res.data);
            });
    }, []);

    return (
        <>
            <Header />

            <div className="container py-4">
                <h2 className="mb-2">
                    {searchText
                        ? `Search Results: ${searchText}`
                        : category
                            ? category
                            : "All Products"}
                </h2>

                <p className="text-muted">
                    {filteredProducts.length} product(s) found.
                </p>

                <Sorting sortBy={sortBy} setSortBy={setSortBy} />

                <div className="row g-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h4>No products found</h4>
                            <p className="text-muted">
                                Try searching with a different product name or category.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Products;
