import React from 'react';
import './Header.scss';
import Link from './Link';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link path="/">Accordion</Link></li>
                <li><Link path="/search">Search Bar</Link></li>
                <li><Link path="/dropdown">Drop Down</Link></li>
                <li><Link path="/translate">Translate</Link></li>
            </ul>
        </div>
    )
};

export default Header;