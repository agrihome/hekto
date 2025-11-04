"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrendingProduct({
  product: { id, img, price_main, price_sub, name },
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="tp__product tp__skeleton">
        <div className="tp__img"></div>
        <p className="tp__name"></p>
        <div className="tp__price">
          <span className="main"></span>
          <span className="sub"></span>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/products/${id}`}>
      <div className="tp__product">
        <Image
          src={img}
          alt={name}
          className="tp__img"
          width={300}
          height={200}
        />
        <p className="tp__name">{name}</p>
        <div className="tp__price">
          <span className="main">{price_main}</span>
          <span className="sub">{price_sub}</span>
        </div>
      </div>
    </Link>
  );
}
