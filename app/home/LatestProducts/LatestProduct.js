import "./LatestProduct.scss";
import Image from "next/image";
import Link from "next/link";

export default function LatestProduct({ min, max, text, img, isLoading }) {
  if (isLoading) {
    return <div className="lp__product lp__skeleton"></div>;
  }

  return (
      <div className="lp__product">
        <div className="lp__img-container">
          <Image className="lp__img" alt="lp" src={img} />
        </div>
        <div className="lp__text-container">
          <span className="text">{text}</span>
          <span className="min">{min}</span>
          <span className="max">{max}</span>
        </div>
      </div>
   
  );
}
