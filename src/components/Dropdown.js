import React, { useEffect, useRef } from "react";
import "./Dropdown.scss";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const ref = useRef();

  useEffect(() => {
    const onBodyClicked = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        // console.log("Inside Dropdown");
      } else {
        // console.log("outside Dropdown");
      }
    };
    document.body.addEventListener("click", onBodyClicked);

    return () => {
      document.body.removeEventListener("click", onBodyClicked);
    };
  }, []);

  const onDropdowmSelected = (e) => {
    onSelectedChange({ value: e.target.value });
  };

  const renderedItems = options.map((option) => {
    return (
      <option
        className="dropdown__option"
        key={option.value}
        value={option.value}
      >
        {option.label}
      </option>
    );
  });
  return (
    <select
      ref={ref}
      className="dropdown__select"
      onChange={(e) => onDropdowmSelected(e)}
    >
      {renderedItems}
    </select>
  );
};

export default Dropdown;
