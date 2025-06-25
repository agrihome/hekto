import p1 from "./p1.jpg";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import p5 from "./p5.jpg";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import p9 from "./p9.png";
import p10 from "./p10.png";
import Product from "./Product";

export default function Products() {
  const products = [
    {
      name: "Watches",
      rating: 3,
      sellPrice: 42,
      maxPrice: 62,
      img: p1,
    },
    {
      name: "Headphones",
      rating: 3,
      sellPrice: 120,
      maxPrice: 150,
      img: p2,
    },
    {
      name: "Laptop",
      rating: 5,
      sellPrice: 400,
      maxPrice: 600,
      img: p3,
    },
    {
      name: "Black Watches",
      rating: 3,
      sellPrice: 30,
      maxPrice: 50,
      img: p4,
    },
    {
      name: "Game Console",
      rating: 3,
      sellPrice: 250,
      maxPrice: 300,
      img: p5,
    },
    {
      name: "Shoes",
      rating: 2,
      sellPrice: 70,
      maxPrice: 80,
      img: p6,
    },
    {
      name: "Perfume",
      rating: 4,
      sellPrice: 80,
      maxPrice: 90,
      img: p7,
    },
    {
      name: "Present Box",
      rating: 1,
      sellPrice: 300,
      maxPrice: 350,
      img: p8,
    },
    {
      name: "Bracelet",
      rating: 4,
      sellPrice: 42,
      maxPrice: 62,
      img: p9,
    },
    {
      name: "Ring",
      rating: 5,
      sellPrice: 42,
      maxPrice: 62,
      img: p10,
    },
  ];

  return (
    <div className="products__container">
      {products.map((product) => {
        return <Product product={product} key={product.name} />;
      })}
    </div>
  );
}
