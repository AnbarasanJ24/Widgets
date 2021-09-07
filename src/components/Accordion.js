import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ items }) => {

    // Takes variable , set the variable state and use state take initial value 
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';
        return (
            <div key={item.title} className="accordion-container__card">
                <h1
                    onClick={() => onTitleClick(index)}
                    className="accordion-container__title"
                >
                    <span className="mr-5"> &#11206;</span>
                    {item.title}
                </h1>
                <h4 className={`accordion-container__content ${active}`}>
                    {item.content}
                </h4>

            </div>
        )
    })

    return (
        <div className="accordion-container">
            <h1 className="accordion-container__heading">
                Accordion
            </h1>
            {renderedItems}
        </div>
    )
}

export default Accordion;