import tc1 from "./tc1.png";
import tc2 from "./tc2.png";
import tc3 from "./tc3.png";
import tc4 from "./tc4.png";
import TopCategory from "./TopCategory";
import "./TopCategories.scss";

export default function TopCategories() {
  const topCategories = [
    {
      img: tc1,
      name: "Perfume",
      category: "Perfume",
    },
    {
      img: tc2,
      name: "Present box",
      category: "Clothe",
    },
    {
      img: tc4,
      name: "Bracelet",
      category: "Jewellery",
    },
    {
      img: tc3,
      name: "Ring",
      category: "Jewellery",
    },
  ];

  return (
    <section className="tc">
      <h2>Top Categories</h2>

      <div className="tc__products">
        {topCategories.map((product) => {
          return (
            <TopCategory
              img={product.img}
              name={product.name}
              key={product.name}
              category={product.category}
            />
          );
        })}
      </div>
    </section>
  );
}
