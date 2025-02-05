import { useState } from "react";
import ProductItem from "./ProductItem";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";

function ProductList() {
  // Local state to manage search input and selected category
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Using custom hook to fetch the products from dummyjson API
  const { data: productsData, error, loading } = useFetch("https://dummyjson.com/products");

  // Get unique categories from the products data
  const categories = productsData ? [...new Set(productsData.products.map(product => product.category))] : [];

  // Filter products based on search text and selected category
  const filteredProducts = productsData ? productsData.products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase()) &&
    (selectedCategory === "" || product.category === selectedCategory)
  ) : [];

  // Render the loading state
  if (loading) {
    return <p className="loading">Loading products...</p>;
  }

  // Render the error state
  if (error) {
    return <p className="error">Error loading products: {error}</p>;
  }

  // Render the product list or no products found message
  return (
    <div className="product-list-container">
      <div className="filter-container">
        <select
          className="category-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)} // Update selected category in local state
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search Products..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // Update search text in local state
        />
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductItem key={product.id} product={product} />
            </Link>
          ))
        ) : (
          <center><p className="noproduct">No products found</p></center>
        )}
      </div>
    </div>
  );
}

export default ProductList;
