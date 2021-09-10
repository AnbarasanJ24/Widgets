import React, { useEffect, useRef } from "react";
import "./Dropdown.scss";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const ref = useRef();

  useEffect(() => {
    const onBodyClicked = (e) => {
      if (ref.current.contains(e.target)) {
        console.log("Inside Dropdown");
      } else {
        console.log("outside Dropdown");
      }
    };
    document.body.addEventListener("click", onBodyClicked);

    return () => {
      document.body.removeEventListener("click", onBodyClicked);
    };
  }, []);

  const renderedItems = options.map((option) => {
    return (
      <option
        onClick={() => onSelectedChange(option)}
        className="dropdown__option"
        key={option.value}
        value={option.value}
      >
        {option.label}
      </option>
    );
  });
  return (
    <select ref={ref} className="dropdown__select">
      {renderedItems}
    </select>
  );
};

export default Dropdown;
