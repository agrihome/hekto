import { createSlice } from "@reduxjs/toolkit";

// image imports
import p1 from "../products/p1.jpg";
import p2 from "../products/p2.png";
import p3 from "../products/p3.png";
import p4 from "../products/p4.png";
import p5 from "../products/p5.jpg";
import p6 from "../products/p6.png";
import p7 from "../products/p7.png";
import p8 from "../products/p8.png";
import p9 from "../products/p9.png";
import p10 from "../products/p10.png";

export const initialProducts = [
  {
    name: "Watches",
    brand: "Casio",
    category: "Watches",
    rating: 3,
    sellPrice: 42,
    maxPrice: 62,
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
    discount: "20% Cashback",
    img: p10,
  },
];

const initialState = {
  initialProducts: initialProducts,
  filters: {
    discount: [],
    rating: [],
    price: [],
    category: [],
    brand: [],
  },
  priceSort: "Low - High",
  perPage: 5,
  currPage: 1,
  filteredProducts: initialProducts,
  products: initialProducts.slice(0, 5),
  pagesList: [1],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const { type, payload } = action.payload;
      const currentFilters = state.filters[type];
      
      if (currentFilters.includes(payload)) {
        state.filters[type] = currentFilters.filter((val) => val !== payload);
      } else {
        state.filters[type] = [...currentFilters, payload];
      }

      // Reset to page 1 when filters change
      state.currPage = 1;
      
      // Recalculate filtered products
      productsSlice.caseReducers.applyFilters(state);
    },
    setPriceSort: (state, action) => {
      state.priceSort = action.payload;
      state.currPage = 1;
      productsSlice.caseReducers.applyFilters(state);
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
      state.currPage = 1;
      productsSlice.caseReducers.applyFilters(state);
    },
    setCurrPage: (state, action) => {
      state.currPage = action.payload;
      productsSlice.caseReducers.applyFilters(state);
    },
    applyFilters: (state) => {
      let filteredProducts = [...state.initialProducts];

      // Apply rating filter
      if (state.filters.rating.length) {
        filteredProducts = filteredProducts.filter((product) =>
          state.filters.rating.includes(product.rating)
        );
      }

      // Apply category filter
      if (state.filters.category.length) {
        filteredProducts = filteredProducts.filter((product) =>
          state.filters.category.includes(product.category)
        );
      }

      // Apply brand filter
      if (state.filters.brand.length) {
        filteredProducts = filteredProducts.filter((product) =>
          state.filters.brand.includes(product.brand)
        );
      }

      // Apply discount filter
      if (state.filters.discount.length) {
        filteredProducts = filteredProducts.filter((product) =>
          state.filters.discount.includes(product.discount)
        );
      }

      // Apply price filter
      if (state.filters.price.length) {
        const numbers = (state.filters.price.join(" ").match(/\b\d+\b/g) || []).map(
          Number
        );
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);

        filteredProducts = filteredProducts.filter(
          (product) => product.sellPrice >= min && product.sellPrice <= max
        );
      }

      // Apply sorting
      if (state.priceSort === "Price : Low - High") {
        filteredProducts.sort((p1, p2) => p1.sellPrice - p2.sellPrice);
      } else if (state.priceSort === "Price : High - Low") {
        filteredProducts.sort((p1, p2) => p2.sellPrice - p1.sellPrice);
      }

      state.filteredProducts = filteredProducts;

      // Calculate pagination
      const totalPages = Math.ceil(filteredProducts.length / state.perPage);
      const startIndex = (state.currPage - 1) * state.perPage;
      const endIndex = startIndex + state.perPage;

      state.products = filteredProducts.slice(startIndex, endIndex);
      state.pagesList = Array.from({ length: totalPages }, (_, i) => i + 1);
    },
  },
});

export const { toggleFilter, setPriceSort, setPerPage, setCurrPage, applyFilters } =
  productsSlice.actions;

export default productsSlice.reducer;

