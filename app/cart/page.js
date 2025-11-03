"use client";

import Button from "../components/Button";
import EmptyCart from "./EmptyCart.jpg";
import Image from "next/image";
import "./cart.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialProducts } from "../store/productsSlice";
import CartItem from "./CartItems";
import { updateQuantity, clearCart, loadCart } from "../store/cartSlice";
import { useRouter } from "next/navigation";

export default function Cart() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);

  // Load cart from localStorage on mount
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const total =
    cartItems.reduce((acc, product) => {
      const productData = initialProducts.filter(
        (item) => item.name == product.name
      )[0];
      if (productData) {
        acc += productData.sellPrice * product.qty;
      }
      return acc;
    }, 0) || 0;

  function handleQtyChange(e) {
    e.preventDefault();

    const el = e.target.closest(".change");

    if (!el) return;

    const data = el.dataset.change;
    const productName = e.currentTarget.dataset.name;

    const product = cartItems.find((item) => item.name == productName);

    if (!product) return;

    let qty;

    if (data == "-") {
      qty = product.qty - 1;
    } else {
      qty = product.qty + 1;
    }

    dispatch(updateQuantity({ name: productName, qty }));
  }

  return (
    <section className="cart">
        {!cartItems.length && (
          <div className="cart__empty">
            <Image
              className="cart__empty-img"
              src={EmptyCart}
              alt="empty cart"
              priority
            ></Image>
            <h3 className="text-center">Your cart is empty</h3>
            <Button
              className="margin-auto"
              onClick={() => {
                router.push("/products");
              }}
            >
              Start Shopping
            </Button>
          </div>
        )}

        {!!cartItems.length && (
          <div className="cart__container">
            <div className="cart__content">
              {cartItems.map((product, index) => {
                return (
                  <CartItem
                    productName={product.name}
                    qty={product.qty}
                    key={index}
                    handleQtyChange={handleQtyChange}
                  ></CartItem>
                );
              })}
            </div>
            <div className="cart__checkout-container">
              <div className="cart__checkout">
                <div className="cart__pricing">
                  <span className="body-bold">Subtotal:</span>
                  <span className="label-bold color-black">${total}</span>
                </div>

                <p className="hr"></p>

                <div className="cart__pricing">
                  <span className="body-bold">Total:</span>
                  <span className="label-bold color-black">
                    ${total + total * 0.2}
                  </span>
                </div>

                <p className="hr"></p>

                <div className="cart__pricing">
                  <span>Shipping</span>
                  <span>$100</span>
                </div>

                <Button className="mt-5">Proceed to checkout</Button>
              </div>
              <span
                className="active cart__clear"
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                Clear cart
              </span>
            </div>
          </div>
        )}
      </section>
  );
}
