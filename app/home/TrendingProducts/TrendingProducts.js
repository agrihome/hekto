import "./TrendingProducts.scss";
import tp1 from "./tp1.jpg";
import tp2 from "./tp2.png";
import tp3 from "./tp3.png";
import tp4 from "./tp4.png";
import TrendingProduct from "./TrendingProduct";

export default function TrendingProducts() {
  const trendingProducts = [
    {
      name: "Black Watches",
      price_main: "$35.00",
      price_sub: "$55.00",
      img: tp2,
    },
    {
      name: "Laptop",
      price_main: "$89.00",
      price_sub: "$99.00",
      img: tp4,
    },
    {
      name: "Headphones",
      price_main: "$90.00",
      price_sub: "$99.00",
      img: tp3,
    },
    {
      name: "Watches",
      price_main: "$42.00",
      price_sub: "$62.00",
      img: tp1,
    },
  ];

  return (
    <section className="tp__container">
      <h2>Trending Products</h2>
      <div className="tp">
        {trendingProducts.map((product) => {
          return <TrendingProduct product={product} key={product.name} />;
        })}
      </div>
    </section>
  );
}
