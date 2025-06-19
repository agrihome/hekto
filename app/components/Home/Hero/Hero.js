import Image from "next/image";
import HeroSecImg from "./HeroSecImg.png";
import HeroImg from "./HeroImg.png";
import "./Hero.scss";
import Button from "../../Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__sec-img-wrapper">
        <Image
          src={HeroSecImg}
          alt="A description of the image"
          className="hero__img"
        />
      </div>
      <div className="hero__primary">
        <span className="text__sub text__sub--active ">
          Best Headphones For Your Life....
        </span>
        <h1 className="h1">New Trendy Collection Headphones</h1>
        <p className="text__sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <Button>Shop Now</Button>
      </div>
      <div className="hero__img-wrapper">
        <Image
          src={HeroImg}
          alt="A description of the image"
          className="hero__img"
        />
      </div>

      <div className="hero__dots">
        <svg
          width="12"
          height="12"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9.48535"
            y="1"
            width="12"
            height="12"
            transform="rotate(45 9.48535 1)"
            fill="#FB2E86"
            stroke="#FB2E86"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9.45605"
            y="1"
            width="12"
            height="12"
            transform="rotate(45 9.45605 1)"
            stroke="#FB2E86"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9.42676"
            y="1"
            width="12"
            height="12"
            transform="rotate(45 9.42676 1)"
            stroke="#FB2E86"
          />
        </svg>
      </div>
    </section>
  );
}
