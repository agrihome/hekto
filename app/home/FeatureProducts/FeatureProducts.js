"use client";
import "./FeatureProducts.scss";
import FeatureProduct from "./FeatureProduct";
import Fp1 from "./fp1.jpg";
import Fp2 from "./fp2.png";
import Fp3 from "./fp3.png";
import Fp4 from "./fp4.png";
import { useState, useEffect, useCallback } from "react";
import { initialProducts } from "../../store/productsSlice";

export default function FeatureProducts() {
  const productNames = ["Watches", "Headphones", "Laptop", "Black Watches"];
  const productImages = [Fp1, Fp2, Fp3, Fp4];
  
  // Map to actual products with IDs from the slice
  const products = productNames.map((name, index) => {
    const product = initialProducts.find((p) => p.name === name);
    return product ? {
      id: product.id,
      name: product.name,
      code: `Code - Y52320${index + 1}`,
      price: `$${product.sellPrice}`,
      img: productImages[index] || product.img,
    } : null;
  }).filter(Boolean);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isLoading]);

 

  return (
    <section className="fp">
      <h2 className="h2">Featured Products</h2>

      <div className="fp__products">
        {products.map((product) => {
          return (
            <FeatureProduct
              key={product.id}
              isLoading={isLoading}
              product={product}
            ></FeatureProduct>
          );
        })}
      </div>

      <span
        className="fp__tabs"
        onClick={() => {
          setIsLoading(true);
        }}
      >
        <svg
          width="16"
          height="4"
          viewBox="0 0 16 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="4" rx="2" fill="#FB2E86" />
        </svg>

        <svg
          width="16"
          height="4"
          viewBox="0 0 16 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="4" rx="2" fill="#FEBAD7" />
        </svg>

        <svg
          width="16"
          height="4"
          viewBox="0 0 16 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="4" rx="2" fill="#FEBAD7" />
        </svg>

        <svg
          width="16"
          height="4"
          viewBox="0 0 16 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="4" rx="2" fill="#FEBAD7" />
        </svg>
      </span>
    </section>
  );
}
