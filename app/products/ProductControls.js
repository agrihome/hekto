import DropDown from "@/app/components/DropDown";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export function PerPage() {
  const { setPerPage } = useContext(ProductsContext);

  return (
    <div className="per-page">
      Per Page
      <DropDown options={[5, 10, 20]} setValue={setPerPage}>
        5
      </DropDown>
    </div>
  );
}

export function SortBy() {
  const { setPriceSort } = useContext(ProductsContext);

  return (
    <div className="sort-by">
      Sort By
      <DropDown
        options={["Price : Low - High", "Price : High - Low"]}
        setValue={setPriceSort}
      ></DropDown>
    </div>
  );
}

export default function ProductControls({
  handleViewChange,
  handleFilterViewChange,
}) {
  return (
    <div className="products__controls">
      <SortBy />

      <PerPage />

      <div className="view">
        View
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#101750"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleViewChange}
          className="view"
          data-add="products__container--2"
        >
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="3" y="15" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#101750"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleViewChange}
          className="view"
          data-add="products__container--1"
        >
          <rect x="3" y="3" width="18" height="6" rx="1" />
          <rect x="3" y="15" width="18" height="6" rx="1" />
        </svg>
      </div>
      <div className="filter" onClick={handleFilterViewChange}>
        Filter<span className="filter__sort">& Sort</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="#101750"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </svg>
      </div>
    </div>
  );
}
