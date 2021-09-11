import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
import "./Translate.scss";
const Translate = () => {
  const options = [
    {
      label: "Tamil",
      value: "ta",
    },
    {
      label: "French",
      value: "fr",
    },
    {
      label: "Albanian",
      value: "sq",
    },
  ];
  const [language, setLanguage] = useState("");
  const [text, setText] = useState("Hi");

  return (
    <div className="translator">
      <h3>Translator</h3>
      <input
        className="translator__input"
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
