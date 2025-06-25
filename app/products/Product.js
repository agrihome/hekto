import Image from "next/image";

export default function Product({
  product: { img, name, sellPrice, maxPrice, rating },
}) {
  return (
    <div className="product__card">
      <div className="product__img-container">
        <Image src={img} alt={name} className="product__img"></Image>
      </div>
      <div className="product__details">
        <div className="product__name">{name}</div>
        <div className="product__rating">{rating}</div>
        <div className="product__price">
          <span className="sellPrice">{sellPrice}</span>
          <span className="maxPrice">{maxPrice}</span>
        </div>
      </div>
    </div>
  );
}
