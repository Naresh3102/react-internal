import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setIsLoading(false);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data :", error.message);
        setIsLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products listing page</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {products.length > 0
          ? products.map((p) => (
              <li key={p.id}>
                <Link to={`${p.id}`}>{p.title}</Link>
              </li>
            ))
          : !error && !isLoading && <p>No product available</p>}
      </ul>
      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default ProductList;
