import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div>
                <div className="ui field">
                    <label htmlFor="name">{text}</label>
                    <input type="text" name="name" id="name" />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default Field;