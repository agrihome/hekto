"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// image imports
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

export const ProductsContext = createContext();

export const initialProducts = [
  {
    name: "Watches",
    brand: "Casio",
    category: "Watches",
    rating: 3,
    sellPrice: 42,
    maxPrice: 62,
    discount: "20%",
    discount: "20% Cashback",
    img: p1,
  },
  {
    name: "Headphones",
    brand: "Sony",
    category: "Headphones",
    rating: 3,
    sellPrice: 120,
    maxPrice: 150,
    discount: "5%",
    discount: "5% Cashback Offer",
    img: p2,
  },
  {
    name: "Laptop",
    brand: "Apple",
    category: "Laptop",
    rating: 5,
    sellPrice: 400,
    maxPrice: 600,
    discount: "20%",
    discount: "25% Discount Offer",
    img: p3,
  },
  {
    name: "Black Watches",
    brand: "Casio",
    category: "Watches",
    rating: 3,
    sellPrice: 30,
    maxPrice: 50,
    discount: "5%",
    discount: "20% Cashback",
    img: p4,
  },
  {
    name: "Game Console",
    brand: "Sony",
    category: "Game Console",
    rating: 3,
    sellPrice: 250,
    maxPrice: 300,
    discount: "20%",
    discount: "25% Discount Offer",
    img: p5,
  },
  {
    name: "Shoes",
    brand: "Vke",
    category: "Clothe",
    rating: 2,
    sellPrice: 70,
    maxPrice: 80,
    discount: "5%",
    discount: "5% Cashback Offer",
    img: p6,
  },
  {
    name: "Perfume",
    brand: "Glossiness",
    category: "Clothe",
    rating: 4,
    sellPrice: 80,
    maxPrice: 90,
    discount: "20%",
    discount: "20% Cashback",
    img: p9,
  },
  {
    name: "Present Box",
    brand: "Glossiness",
    category: "Clothe",
    rating: 1,
    sellPrice: 300,
    maxPrice: 350,
    discount: "5%",
    discount: "25% Discount Offer",
    img: p8,
  },
  {
    name: "Bracelet",
    brand: "Vke",
    category: "Clothe",
    rating: 4,
    sellPrice: 42,
    maxPrice: 62,
    discount: "20%",
    discount: "5% Cashback Offer",
    img: p7,
  },
  {
    name: "Ring",
    brand: "Vke",
    category: "Clothe",
    rating: 5,
    sellPrice: 42,
    maxPrice: 62,
    discount: "5%",
    discount: "20% Cashback",
    img: p10,
  },
];

export default function ProductsData({ children }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const categoryArr = category ? [category] : [];

  const [filters, setFilters] = useState({
    discount: [],
    rating: [],
    price: [],
    category: categoryArr,
    brand: [],
  });

  const [pagesList, setPagesList] = useState([1]);
  const [currPage, setCurrPage] = useState(1);

  const [displayedPage, setDisplayedPage] = useState(1);

  const [priceSort, setPriceSort] = useState("Low - High");
  const [perPage, setPerPage] = useState(5);

  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    setCurrPage(1);
  }, [perPage, filters, priceSort]);

  useEffect(() => {
    let filteredProducts = structuredClone(initialProducts);
    if (filters.rating.length) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.rating.includes(product.rating)
      );
    }

    if (filters.category.length) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    if (filters.brand.length) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.brand.includes(product.brand)
      );
    }

    if (filters.discount.length) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.discount.includes(product.discount)
      );
    }

    if (filters.price.length) {
      const numbers = (filters.price.join(" ").match(/\b\d+\b/g) || []).map(
        Number
      );
      const min = Math.min(...numbers);
      const max = Math.max(...numbers);

      filteredProducts = filteredProducts.filter(
        (product) => product.sellPrice >= min && product.sellPrice <= max
      );
    }

    if (priceSort == "Price : Low - High") {
      filteredProducts.sort((p1, p2) => p1.sellPrice - p2.sellPrice);
    } else if (priceSort == "Price : High - Low") {
      filteredProducts.sort((p1, p2) => p2.sellPrice - p1.sellPrice);
    }

    const totalPages = Math.ceil(filteredProducts.length / perPage);
    const startIndex = (currPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    setProducts(filteredProducts.slice(startIndex, endIndex));

    setPagesList(Array.from({ length: totalPages }, (_, i) => i + 1));
  }, [filters, priceSort, perPage, currPage]);

  const handleFiltersChange = useCallback(function handleFiltersChange(
    type,
    payload
  ) {
    let data;

    if (filters[type]?.includes(payload)) {
      data = filters[type].filter((val) => payload != val);
    } else {
      data = [...filters[type], payload];
    }

    setFilters((prev) => {
      return {
        ...prev,
        [type]: [...data],
      };
    });
  });

  return (
    <ProductsContext.Provider
      value={{
        products,
        filters,
        handleFiltersChange,
        setPriceSort,
        setPerPage,
        pagesList,
        setCurrPage,
        currPage,
        initialProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
