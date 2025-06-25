import Image from "next/image";

export default function TrendingProduct({
  product: { img, price_main, price_sub, name },
}) {
  return (
    <div className="tp__product">
      <Image src={img} alt={name} className="tp__img" />
      <p className="tp__name">{name}</p>
      <div className="tp__price">
        <span className="main">{ price_main }</span>
        <span className="sub">{ price_sub }</span>
      </div>
    </div>
  );
}
