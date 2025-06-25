import "./products.scss";
import ProductControls from "./ProductControls";
import ProductsFilter from "./ProductsFilter";
import Products from "./Products";

export default function ProductsPage() {
  return (
    <section className="products">
      <h1 className="text-center">Products</h1>
      <nav className="products__nav">
        <span className="">Home</span>
        <span className="products__navDot"></span>
        <span className="active">Products</span>
      </nav>
      <ProductControls />
      <div className="products__content">
        <ProductsFilter />
        <Products />
      </div>
    </section>
  );
}
