"use client";
import "./LatestProduct.scss";
import LatestProduct from "./LatestProduct.js";
import lp1 from "./lp1.jpg";
import lp2 from "./lp2.png";
import lp3 from "./lp3.png";
import lp4 from "./lp4.png";
import lp5 from "./lp5.png";
import lp6 from "./lp6.png";
import { useState, useEffect } from "react";

export default function LatestProducts() {
  const latestProducts = [
    {
      img: lp1,
      text: "Game Console",
      min: "$120.00",
      max: "$160.00",
    },
    {
      img: lp2,
      text: "Perfume",
      min: "$30.00",
      max: "$40.00",
    },
    {
      img: lp3,
      text: "Present Box",
      min: "$20.00",
      max: "$30.00",
    },
    {
      img: lp4,
      text: "Shoes",
      min: "$40.00",
      max: "$55.00",
    },
    {
      img: lp5,
      text: "Ring",
      min: "$130.00",
      max: "$150.00",
    },
    {
      img: lp6,
      text: "Bracelet",
      min: "$60.00",
      max: "$76.00",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  function handleOnClick(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  return (
    <section className="lp">
      <h2 className="h2">Latest Products</h2>
      <div className="lp__link-container">
        <span className="lp__link lp__link--active" onClick={handleOnClick}>
          New Arrival
        </span>
        <span className="lp__link" onClick={handleOnClick}>
          Best Seller
        </span>
        <span className="lp__link" onClick={handleOnClick}>
          Featured
        </span>
        <span className="lp__link" onClick={handleOnClick}>
          Special offer
        </span>
      </div>

      <div className="lp__products">
        {latestProducts.map(({ img, text, min, max }) => (
          <LatestProduct
            img={img}
            text={text}
            min={min}
            max={max}
            isLoading={isLoading}
            key={Math.random()}
          />
        ))}
      </div>
    </section>
  );
}
