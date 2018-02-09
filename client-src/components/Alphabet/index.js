import React from 'react';
import ReactDOM from 'react-dom';

import {Letter} from '../Letter';

export class Alphabet extends React.PureComponent {
    render() {
        const {
            alphabet,
            issueId,
            onClick
        } = this.props;

        return (
            <ul>
                {alphabet.map(({letter, active}) =>
                    <li key={letter}>
                        <Letter
                            onClick={onClick}
                            isActive={active}
                            data={({
                                issueId,
                                letter
                            })}
                        >
                            {letter}
                        </Letter>
                    </li>
                )}
            </ul>
        );
    }
};
