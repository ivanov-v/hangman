import React from 'react';
import ReactDOM from 'react-dom';

export class HomePageRaw extends React.Component {
    render() {
        const {onPlay} = this.props;

        return (
            <div>
                <h1>Виселица</h1>
                <button type="button" onClick={onPlay}>
                    Начать игру
                </button>
            </div>
        );
    }
}
