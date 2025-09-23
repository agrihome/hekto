import Product from "./Product";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

// comment

export default function Products({ ref }) {
  const { products, setCurrPage, pagesList, currPage } =
    useContext(ProductsContext);
  return (
    <div>
      <div className="products__container--1" ref={ref}>
        {products.map((product) => {
          return <Product product={product} key={product.name} />;
        })}

        {!products.length && (
          <p className="text-center active">No products based on your filter</p>
        )}
      </div>
      <div className="products__pagination">
        {pagesList.map((page) => (
          <span
            className={`products__pagination-item label-default ${
              currPage == page ? "products__pagination-item--active" : ""
            }`}
            key={page}
            onClick={() => setCurrPage(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
}
