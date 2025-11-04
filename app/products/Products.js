"use client";

import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { setCurrPage } from "../store/productsSlice";

export default function Products({ ref }) {
  const dispatch = useDispatch();
  const {
    products = [],
    pagesList = [],
    currPage = 1,
  } = useSelector((state) => state.products || {});

  return (
    <div>
      <div className="products__container--1" ref={ref}>
        {products &&
          products.length > 0 &&
          products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}

        {(!products || !products.length) && (
          <p className="text-center active">No products based on your filter</p>
        )}
      </div>
      <div className="products__pagination">
        {pagesList &&
          pagesList.length > 0 &&
          pagesList.map((page) => (
            <span
              className={`products__pagination-item label-default ${
                currPage == page ? "products__pagination-item--active" : ""
              }`}
              key={page}
              onClick={() => dispatch(setCurrPage(page))}
            >
              {page}
            </span>
          ))}
      </div>
    </div>
  );
}
