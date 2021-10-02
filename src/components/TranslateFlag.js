import React from 'react';
import UserCreate from './UserCreate';
import './TranslateFlag.scss';
import LanguageContext from '../context/LanguageContext';

class TranslateFlag extends React.Component {

    state = { language: 'english' };

    onLanguageChange(term) {
        this.setState({ language: term })
    }

    render() {

        return (
            <div className="translateFlag-container">
                <h3>Select Language
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
                </h3>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
};

export default TranslateFlag;