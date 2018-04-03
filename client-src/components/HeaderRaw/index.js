import React from 'react';
import ReactDOM from 'react-dom';

export class HeaderRaw extends React.Component {
    render() {
        const {text} = this.props;

        return (
            <header>
                <h1>{text}</h1>
            </header>
        );
    }
}
