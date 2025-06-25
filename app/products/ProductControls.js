import DropDown from "@/app/components/DropDown";

export default function ProductControls() {
  return (
    <div className="products__controls">
      <div className="per-page">
        Per Page
        <DropDown>10</DropDown>
      </div>
      <div className="sort-by">
        Sort By
        <DropDown>Price: High - Low</DropDown>
      </div>
      <div className="view">
        view
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#101750"
          xmlns="http://www.w3.org/2000/svg"
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
        >
          <rect x="3" y="3" width="18" height="6" rx="1" />
          <rect x="3" y="15" width="18" height="6" rx="1" />
        </svg>
      </div>
    </div>
  );
}
