import React, { useState } from "react";
import Accordion from "./Accordion";
import "./App.scss";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Search from "./Search";
import Translate from "./Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  { label: "A shade of Red", value: "red" },
  { label: "A shade of Blue", value: "blue" },
  { label: "A shade of Green", value: "green" },
];

const App = () => {
  const isVisible = false;
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
      <div className="container__accordion">
        {isVisible ? <Accordion items={items} /> : null}
        {isVisible ? <Search /> : null}
        {isVisible ? (
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        ) : null}
        <Translate />
      </div>
    </div>
  );
};

export default App;
