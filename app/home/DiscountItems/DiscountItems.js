import Button from "@/app/components/Button";
import Image from "next/image";
import Headphones from "./Headphones.png";
import "./DiscountItems.scss";

export default function DiscountItems() {
  const tick = (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 13.25L8.25 18.5L21 5.75"
        stroke="#101750"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const paragraphs = [
    "Material expose like metals",
    "Clear lines and geomatric figures",
    "Simple neutral colours.",
    "Material expose like metals",
  ];

  return (
    <section className="di__container">
      <h2>Discount Item</h2>
      <nav className="di__nav">
        <span className="active">Headphones</span>
        <span>Laptop</span>
        <span>Other</span>
      </nav>
      <section className="di">
        <div className="di__content">
          <h3 className="di__heading">20% Discount Of All Products</h3>
          <p className="di__product">Headphones Compact</p>
          <p className="di__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <Image src={Headphones} alt={"headphones"} className="di__mini-img" />

          <div className="di__features">
            {paragraphs.map((para, index) => {
              return (
                <p key={index}>
                  <span>{tick}</span>
                  <span>{para}</span>
                </p>
              );
            })}
          </div>
          <Button className="di__button">Shop Now</Button>
        </div>
        <Image src={Headphones} alt={"headphones"} className="di__img" />
      </section>
    </section>
  );
}
