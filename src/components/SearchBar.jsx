
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();

        if (search.trim() !== "") {
            navigate("/products?search=" + encodeURIComponent(search.trim()));
        }
    }

    function clearSearch() {
        setSearch("");
    }

    return (
        <form className="shop-search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {search !== "" && (
                <button
                    type="button"
                    className="shop-search-clear"
                    onClick={clearSearch}
                    aria-label="Clear search"
                >
                    <FaTimes />
                </button>
            )}

            <button type="submit" className="shop-search-button" aria-label="Search">
                <FaSearch />
            </button>
        </form>
    );
}

export default SearchBar;
