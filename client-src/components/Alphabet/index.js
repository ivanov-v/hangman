import React from 'react';
import ReactDOM from 'react-dom';

import {Letter} from '../Letter';

export class Alphabet extends React.PureComponent {
    handleClick = letter => () => {
        const {onClick, issueId} = this.props;

        onClick({
            letter,
            issueId
        });
    };

    renderLetter = ({letter, active}) => {
        return (
            <li key={letter}>
                <Letter
                    isActive={active}
                    onClick={this.handleClick(letter)}
                >
                    {letter}
                </Letter>
            </li>
        );
    };

    render() {
        const {
            alphabet,
        } = this.props;

        return <ul className='alphabet'>{alphabet.map(this.renderLetter)}</ul>;
    }
}
