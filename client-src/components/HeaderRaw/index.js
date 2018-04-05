import React from 'react';
import ReactDOM from 'react-dom';

export class HeaderRaw extends React.Component {
    render() {
        const {text, word, lives} = this.props;

        return (
            <header>
                <h1>{text}</h1>
                <h2>{word}</h2>
                <h3>Жизни: {lives}</h3>
            </header>
        );
    }
}
