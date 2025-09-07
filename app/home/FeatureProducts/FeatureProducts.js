"use client";
import "./FeatureProducts.scss";
import FeatureProduct from "./FeatureProduct";
import Fp1 from "./fp1.jpg";
import Fp2 from "./fp2.png";
import Fp3 from "./fp3.png";
import Fp4 from "./fp4.png";
import { useState, useEffect, useCallback } from "react";

export default function FeatureProducts() {
  const products = [
    {
      name: "Watches",
      code: "Code - Y523201",
      price: "$52.00",
      img: Fp1,
    },
    {
      name: "Headphones",
      code: "Code - Y523201",
      price: "$90.00",
      img: Fp2,
    },
    {
      name: "Laptop",
      code: "Code - Y523201",
      price: "$3 400.00",
      img: Fp3,
    },
    {
      name: "Black Watches",
      code: "Code - Y523201",
      price: "$35.00",
      img: Fp4,
    },
  ];

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
              key={product.name}
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
