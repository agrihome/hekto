import { useState,useRef } from "react";
import "./Dropdown.scss";

export default function Dropdown({ options, setValue }) {
  const [selected, setSelected] = useState(options[0]);
  const [displayOptions, setDisplayOptions] = useState(false);
  const buttonRef = useRef();

  function handleOptionClick(e) {
    e.preventDefault();
    const option = e.target.dataset.option;

    setSelected(option);
    setValue(option);

    buttonRef.current.blur();
  }

  return (
    <button
      ref={buttonRef}
      className="dropdown"
      onClick={() => {
        setDisplayOptions((prev) => !prev);
      }}
    >
      {selected}
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

      <div className="options">
        {options.map((option) => {
          return (
            <p key={option} onClick={handleOptionClick} data-option={option}>
              {option}
            </p>
          );
        })}
      </div>
    </button>
  );
}
