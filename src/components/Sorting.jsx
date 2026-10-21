
function Sorting({ sortBy, setSortBy }) {
    return (
        <div className="d-flex align-items-center gap-2 flex-wrap mb-4">
            <label htmlFor="productSort" className="fw-semibold">
                Sort By:
            </label>

            <select
                id="productSort"
                className="form-select"
                style={{ maxWidth: "230px" }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="default">Recommended</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
            </select>
        </div>
    );
}

export default Sorting;
