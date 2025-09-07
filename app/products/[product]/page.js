"use client";

import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext";
import "./produtDetail.scss";
import Image from "next/image";
import Button from "@/app/components/Button";
import placeholder from "./placeholder.jpg";
import JSXStyle from "styled-jsx/style";

export default function ProductDetail() {
  let { product } = useParams();
  product = decodeURIComponent(product);

  console.log(product);

  const { products } = useContext(ProductsContext);

  const router = useRouter();

  const [cart, setCart] = useState([]);

  function handleAddtoCart(e) {
    e.preventDefault();

    let cartString = localStorage.getItem("cart");

    let cart;

    if (!cartString) {
      cart = [];
    } else {
      cart = JSON.parse(cartString);
    }

    if (
      cart.filter((product) => product.name == currProduct.name).length == 0
    ) {
      cart.push({
        name: product,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    router.push("/cart");
  }

  const details = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
    "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
    "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
    "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
    "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
  ];

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || []));
  }, []);

  const tabs = ["Description", "Additional Info", "Reviews", "Video"];

  const [activeTab, setActiveTab] = useState(0);

  const currProduct = products.filter((item) => item.name == product)[0];

  return (
    <div className="dp">
      <div className="dp__primary">
        <div className="dp__mini-images">
          <Image
            alt={currProduct.name}
            src={placeholder}
            className="dp__mini-image dp__mini-image--1"
            priority
          />
          <Image
            alt={currProduct.name}
            src={placeholder}
            className="dp__mini-image dp__mini-image--2"
          />
          <Image
            alt={currProduct.name}
            src={placeholder}
            className="dp__mini-image dp__mini-image--3"
          />
        </div>

        <div className="dp__image-container">
          <Image
            alt={currProduct.name}
            src={currProduct.img}
            className="dp__image"
            priority
          />
        </div>

        <div className="dp__details">
          <h3>{currProduct.name}</h3>

          <div className="dp__rating">
            {[...Array(5)].map((val, index) => {
              return (
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  key={index}
                >
                  <path
                    d="M6.09749 0.891366C6.45972 0.132244 7.54028 0.132244 7.90251 0.891366L9.07038 3.33882C9.21616 3.64433 9.5066 3.85534 9.84221 3.89958L12.5308 4.25399C13.3647 4.36391 13.6986 5.39158 13.0885 5.97067L11.1218 7.83768C10.8763 8.07073 10.7653 8.41217 10.827 8.74502L11.3207 11.4115C11.4739 12.2386 10.5997 12.8737 9.86041 12.4725L7.47702 11.1789C7.1795 11.0174 6.8205 11.0174 6.52298 11.1789L4.13959 12.4725C3.40033 12.8737 2.52614 12.2386 2.67929 11.4115L3.17304 8.74502C3.23467 8.41217 3.12373 8.07073 2.87823 7.83768L0.911452 5.97067C0.301421 5.39158 0.635332 4.36391 1.46924 4.25399L4.15779 3.89958C4.4934 3.85534 4.78384 3.64433 4.92962 3.33882L6.09749 0.891366Z"
                    fill={index < currProduct.rating ? "#F9BA00" : "#E5E0FC"}
                  />
                </svg>
              );
            })}
          </div>

          <div className="dp__pricing">
            <span className="sellPrice label-default">
              ${currProduct.sellPrice}
            </span>
            <span className="maxPrice label-small">
              ${currProduct.maxPrice}
            </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>

          <div className="dp__actions">
            <Button onClick={handleAddtoCart}>
              {cart.filter((product) => product.name == currProduct.name).length
                ? "Already in cart"
                : "Add to cart"}
            </Button>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7141 11.3018C20.9713 10.5541 19.9865 10.0995 18.9387 10.0207C17.891 9.94192 16.85 10.2441 16.0049 10.8724C15.1147 10.2061 14.0067 9.90396 12.904 10.0268C11.8013 10.1497 10.7858 10.6884 10.0621 11.5346C9.33828 12.3807 8.95999 13.4713 9.00336 14.5869C9.04672 15.7024 9.50852 16.76 10.2958 17.5467L15.5082 22.7917C15.5732 22.8577 15.6506 22.9101 15.7359 22.9459C15.8211 22.9816 15.9126 23 16.0049 23C16.0973 23 16.1887 22.9816 16.274 22.9459C16.3593 22.9101 16.4367 22.8577 16.5017 22.7917L21.7141 17.5467C22.1218 17.1367 22.4452 16.6499 22.6658 16.1142C22.8864 15.5784 23 15.0042 23 14.4242C23 13.8443 22.8864 13.27 22.6658 12.7343C22.4452 12.1985 22.1218 11.7118 21.7141 11.3018ZM20.7276 16.554L16.0049 21.2992L11.2823 16.554C10.8661 16.1334 10.5826 15.5986 10.4673 15.0166C10.3521 14.4345 10.4102 13.8312 10.6344 13.2823C10.8585 12.7333 11.2388 12.2633 11.7275 11.931C12.2162 11.5987 12.7915 11.419 13.3812 11.4145C14.1691 11.4164 14.924 11.7329 15.4802 12.2945C15.5452 12.3605 15.6226 12.4129 15.7079 12.4486C15.7931 12.4844 15.8846 12.5028 15.977 12.5028C16.0693 12.5028 16.1608 12.4844 16.246 12.4486C16.3313 12.4129 16.4087 12.3605 16.4737 12.2945C17.0463 11.7953 17.7859 11.5336 18.543 11.5623C19.3 11.5911 20.0179 11.9082 20.5514 12.4495C21.0849 12.9908 21.3941 13.7159 21.4164 14.4779C21.4387 15.2399 21.1725 15.982 20.6716 16.554H20.7276Z"
                fill="#101750"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="dp__secondary">
        <div
          className="dp__tabs"
          onClick={(e) => {
            e.preventDefault();
            const tab = e.target.closest(".dp__tab");

            if (!tab) return;

            const index = tab.dataset.tab;

            setActiveTab(index);
          }}
        >
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={`title-large dp__tab ${
                index == activeTab ? "dp__tab--active" : ""
              }`}
              data-tab={index}
            >
              {tab}
            </span>
          ))}
        </div>

        <p className="title-medium">Various tempor.</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam
          dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
          consectetur. Pellentesque diam dolor, tincidunt nec ante congue,
          tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis
          ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec
          ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula
          nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis
          nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus,
          congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus
        </p>

        <p className="title-medium">More details</p>

        <ul className="dp__more-list">
          {details.map((para, index) => {
            return (
              <li key={index} className="dp__more-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.5L5.5 12L14 3.5"
                    stroke="#8A8FB9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {para}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="dp__suggestions">
        <h3>Related Products</h3>

        <div className="dp__products">
          {products
            .filter(
              (item) =>
                item.category == currProduct.category && item != currProduct
            )
            .map((product, index) => {
              return (
                <div key={product.name} className="dp__product">
                  <div className="product__img-container">
                    <Image
                      src={product.img}
                      alt={product.name}
                      className="product__img"
                    ></Image>
                  </div>
                  <div className="product__details">
                    <p className="product__name label-bold">{product.name}</p>
                    <p className="label-small">Code - Y52320{index + 1}</p>
                    <p className="label-bold product__price">
                      ${product.sellPrice}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
