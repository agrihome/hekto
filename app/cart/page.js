"use client";

import Button from "../components/Button";
import EmptyCart from "./EmptyCart.jpg";
import Image from "next/image";
import "./cart.scss";
import { useEffect, useState, useRef, useContext } from "react";
import ProductData, {
  ProductsContext,
  initialProducts,
} from "../products/ProductsContext";
import CartItem from "./CartItems";

import { useRouter } from "next/navigation";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const isFirstRender = useRef(true);
  const router = useRouter();

  const total =
    cart.reduce((acc, product) => {
      const productData = initialProducts.filter(
        (item) => item.name == product.name
      )[0];
      acc += productData.sellPrice * product.qty;

      return acc;
    }, 0) || 0;

  useEffect(() => {
    const storedCartString = localStorage.getItem("cart");

    let storedCart;
    if (!storedCartString) {
      return;
    } else {
      storedCart = JSON.parse(storedCartString);
    }

    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleQtyChange(e) {
    e.preventDefault();

    const el = e.target.closest(".change");

    if (!el) return;

    const data = el.dataset.change;
    const productName = e.currentTarget.dataset.name;

    const product = cart.filter((product) => product.name == productName)[0];

    let qty;

    if (data == "-") {
      qty = product.qty - 1;
    } else {
      qty = product.qty + 1;
    }

    if (qty == 0) {
      setCart((prev) => {
        return prev.filter((item) => item != product);
      });

      return;
    }

    setCart((prev) => {
      const cartProducts = structuredClone(prev);

      cartProducts.filter((item) => item.name == product.name)[0].qty = qty;

      return cartProducts;
    });
  }

  return (
    <ProductData>
      <section className="cart">
        {!cart.length && (
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

        {!!cart.length && (
          <div className="cart__container">
            <div className="cart__content">
              {cart.map((product, index) => {
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
                  setCart([]);
                }}
              >
                Clear cart
              </span>
            </div>
          </div>
        )}
      </section>
    </ProductData>
  );
}
