"use client";

import "./products.scss";
import ProductControls from "./ProductControls";
import ProductsFilter from "./ProductsFilter";
import Products from "./Products";
import { useCallback, useRef } from "react";
import Link from "next/link";
import ProductsData from "./ProductsContext";

export default function ProductsPage() {
  const productsContainer = useRef();
  const productsFilter = useRef();

  const handleViewChange = useCallback((e) => {
    if (productsContainer.current) {
      const aligner = e.target.closest(".view");
      productsContainer.current.className = aligner.dataset.add;
    }
  }, []);

  const handleFilterViewChange = useCallback((e) => {
    console.log(productsFilter.current);
    productsFilter.current.classList.add("show");
  }, []);

  return (
    <section className="products">
      <h1 className="text-center">Products</h1>
      <nav className="products__nav">
        <span className="">
          <Link href="/home">Home</Link>
        </span>
        <span className="products__navDot"></span>
        <span className="active">Products</span>
      </nav>
      <ProductControls
        handleViewChange={handleViewChange}
        handleFilterViewChange={handleFilterViewChange}
      />
      <div className="products__content">
        <ProductsFilter ref={productsFilter} />
        <Products ref={productsContainer} />
      </div>
    </section>
  );
}
