import "./LatestProduct.scss";
import LatestProduct from "./LatestProduct.js";
import lp1 from "./lp1.jpg";
import lp2 from "./lp2.png";
import lp3 from "./lp3.png";
import lp4 from "./lp4.png";
import lp5 from "./lp5.png";
import lp6 from "./lp6.png";

export default function LatestProducts() {
  const latestProducts = [
    {
      img: lp1,
      text: "Game console",
      min: "$76.00",
      max: "$76.00",
    },
    {
      img: lp2,
      text: "Game console",
      min: "$76.00",
      max: "$76.00",
    },
    {
      img: lp3,
      text: "Game console",
      min: "$76.00",
      max: "$76.00",
    },
    {
      img: lp4,
      text: "Game console",
      min: "$76.00",
      max: "$76.00",
    },
    {
      img: lp5,
      text: "Game console",
      min: "$76.00",
      max: "$76.00",
    },
    {
      img: lp6,
      text: "Game console",
      min: "$76.00",
      max: "$76.00",
    },
  ];

  return (
    <section className="lp">
      <h2 className="h2">Latest Products</h2>
      <div className="lp__link-container">
        <span className="lp__link lp__link--active">New Arrival</span>
        <span className="lp__link">Best Seller</span>
        <span className="lp__link">Featured</span>
        <span className="lp__link">Special offer</span>
      </div>

      <div className="lp__products">
        {latestProducts.map(({img,text,min,max}) => (
          <LatestProduct img={img} text={text} min={min} max={max} key={Math.random()} />
        ))}

      </div>
    </section>
  );
}
