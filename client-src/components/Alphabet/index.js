import React from 'react';
import ReactDOM from 'react-dom';

import {Letter} from '../Letter';

export class Alphabet extends React.PureComponent {
    render() {
        const {
            alphabet,
            onClick
        } = this.props;

        return (
            <ul>
                {alphabet.map((letter) =>
                    <li key={letter}>
                        <Letter
                            onClick={onClick}
                            data={letter}
                        >
                            {letter}
                        </Letter>
                    </li>
                )}
            </ul>
        );
    }
};
