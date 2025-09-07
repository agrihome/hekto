import ProductFilterHeading from "./ProductsFilterHeading";
import ProductsFilterOptions from "./ProductFilterOption";
import { SortBy, PerPage } from "./ProductControls";


export default function ProductsFilter({ ref }) {
  const filtersData = [
    {
      category: "brand",
      options: ["Casio", "Sony", "Apple", "Vke", "Glossiness"],
      fill: {
        inActive: "#DDD6FF",
        active: "#603EFF",
      },
    },
    {
      category: "discount",
      options: ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"],
      fill: {
        inActive: "#FEB9C4",
        active: "#FB2E86",
      },
    },
    {
      category: "rating",
      fill: {
        inActive: "#FFF3CE",
        active: "#F9BA00",
      },
    },
    {
      category: "category",
      options: [
        "Watches",
        "Headphones",
        "Laptop",
        "Game Console",
        "Clothe",
        "Jewellery",
        "Perfume",
      ],
      fill: {
        inActive: "#FEB9C4",
        active: "#FB2E86",
      },
    },
    {
      category: "price",
      options: [
        "$0 - $150",
        "$150 - $350",
        "$350 - $500",
        "$550 - $800",
        "$800+",
      ],
      fill: {
        inActive: "#FEB9C4",
        active: "#FB2E86",
      },
    },
  ];

  return (
    <div className="products__filter hide" ref={ref}>
      <SortBy />
      <PerPage />

      {filtersData.map((filter) => {
        return (
          <div
            className="products__filter-category-container"
            key={filter.category}
          >
            <ProductFilterHeading>{filter.category}</ProductFilterHeading>

            {filter.category != "rating" && (
              <div className="products__filter-options">
                {filter.options.map((option) => {
                  return (
                    <ProductsFilterOptions
                      key={option}
                      fill={filter.fill}
                      category={filter.category}
                    >
                      {option}
                    </ProductsFilterOptions>
                  );
                })}
              </div>
            )}

            {filter.category === "rating" && (
              <div className="products__filter-options">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <ProductsFilterOptions
                    key={rating}
                    category={filter.category}
                    fill={filter.fill}
                    rating={rating}
                  >
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_16508_1160)">
                          <path
                            d="M7.09749 1.89137C7.45972 1.13224 8.54028 1.13224 8.90251 1.89137L10.0704 4.33882C10.2162 4.64433 10.5066 4.85534 10.8422 4.89958L13.5308 5.25399C14.3647 5.36391 14.6986 6.39158 14.0885 6.97067L12.1218 8.83768C11.8763 9.07073 11.7653 9.41217 11.827 9.74502L12.3207 12.4115C12.4739 13.2386 11.5997 13.8737 10.8604 13.4725L8.47702 12.1789C8.1795 12.0174 7.8205 12.0174 7.52298 12.1789L5.13959 13.4725C4.40033 13.8737 3.52614 13.2386 3.67929 12.4115L4.17304 9.74502C4.23467 9.41217 4.12373 9.07073 3.87823 8.83768L1.91145 6.97067C1.30142 6.39158 1.63533 5.36391 2.46924 5.25399L5.15779 4.89958C5.4934 4.85534 5.78384 4.64433 5.92962 4.33882L7.09749 1.89137Z"
                            fill={index < rating ? "#F9BA00" : "#ddd"}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_16508_1160">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </ProductsFilterOptions>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <button
        className="close"
        onClick={(e) => {
          ref.current.className = "products__filter hide";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
