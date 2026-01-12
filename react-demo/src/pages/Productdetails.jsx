import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdetails = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${pid}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data :", error.message);
      }
    };

    fetchData();
  });

  return (
    <div>
      <h1>Product Details Page</h1>
      {product ? (
        <div>
          <p>Product Id : {product.id}</p>
          <p>Product Title: {product.title}</p>
          <p>Product Price: {product.price}</p>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Productdetails;
