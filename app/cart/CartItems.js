"use client";

import { useSelector } from "react-redux";
import { initialProducts } from "../store/productsSlice";
import Image from "next/image";

export default function CartItem({ productId, qty, handleQtyChange }) {
  const product = initialProducts.find((product) => product.id === productId);

  if (!product) {
    return null;
  }


  return (
    <div className="cart__item">
      <div className="cart__item-img-container">
        <Image
          src={product.img}
          alt={product.name}
          className="cart__item-img"
          priority
        />
      </div>

      <div className="cart__item-details">
        <span className="title-medium">{product.name}</span>
        <span className="label-default">${product.sellPrice}</span>
      </div>

      <div
        className="cart__item-qty"
        onClick={handleQtyChange}
        data-id={product.id}
      >
        <button className="change" data-change="-">
          -
        </button>
        <span>{qty}</span>
        <button className="change" data-change="+">
          +
        </button>
      </div>

      <span
        className="cart__item-price label-default"
        onClick={handleQtyChange}
      >
        ${product.sellPrice * qty}
      </span>
    </div>
  );
}
