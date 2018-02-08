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
                {alphabet.map(({value, active}) =>
                    <li key={value}>
                        <Letter
                            onClick={onClick}
                            isActive={active}
                            data={value}
                        >
                            {value}
                        </Letter>
                    </li>
                )}
            </ul>
        );
    }
};
