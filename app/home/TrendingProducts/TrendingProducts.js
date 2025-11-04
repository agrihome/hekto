"use client";

import "./TrendingProducts.scss";
import tp1 from "./tp1.jpg";
import tp2 from "./tp2.png";
import tp3 from "./tp3.png";
import tp4 from "./tp4.png";
import TrendingProduct from "./TrendingProduct";
import { initialProducts } from "../../store/productsSlice";

export default function TrendingProducts() {
  const trendingProductNames = ["Black Watches", "Laptop", "Headphones", "Watches"];
  const productImages = [tp2, tp4, tp3, tp1];
  
  // Map to actual products with IDs from the slice
  const trendingProducts = trendingProductNames.map((name, index) => {
    const product = initialProducts.find((p) => p.name === name);
    return product ? {
      id: product.id,
      name: product.name,
      price_main: `$${product.sellPrice}`,
      price_sub: `$${product.maxPrice}`,
      img: productImages[index] || product.img,
    } : null;
  }).filter(Boolean);

  return (
    <section className="tp__container">
      <h2>Trending Products</h2>
      <div className="tp">
        {trendingProducts.map((product) => {
          return <TrendingProduct product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
}
