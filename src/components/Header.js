import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><a href="/">Accordion</a></li>
                <li><a href="/search">Search Bar</a></li>
                <li><a href="/dropdown">Drop Down</a></li>
                <li><a href="/translate">Translate</a></li>
            </ul>
        </div>
    )
};

export default Header;