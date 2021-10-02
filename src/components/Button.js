import React from "react";
import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext"

class Button extends React.Component {

    renderSubmit(value) {
        return value === 'english' ? 'English' : 'Voorleggen'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer >
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <div>
                <ColorContext.Consumer>
                    {(color) => this.renderButton(color)}
                </ColorContext.Consumer>
            </div>
        )
    }
}

export default Button;