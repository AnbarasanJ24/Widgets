import React from "react";
import Accordion from "./Accordion";
import './App.scss';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components',
    },
];

const App = () => {
    return (
        <div className="container">
            <div className="container__accordion">
                <Accordion items={items} />
            </div>
        </div>
    )
}

export default App;