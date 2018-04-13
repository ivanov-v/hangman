import React from 'react';
import ReactDOM from 'react-dom';

export class PausePageRaw extends React.Component {
    render() {
        const {onPlay, onHome} = this.props;

        return (
            <div>
                <button type="button" onClick={onPlay}>
                    Продолжить игру
                </button>
                <button type="button" onClick={onHome}>
                    Перейти на домашний экран
                </button>
            </div>
        );
    }
}
