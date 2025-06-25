import "./Dropdown.scss";

export default function Dropdown({ children }) {
  return (
    <div className="dropdown">
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="16" height="16" fill="white" />
        <path
          d="M3 5L8.00016 10L13.0003 5"
          stroke="#101750"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
