import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import {Letter} from '@/components/Letter';

const List = styled.ul`
    max-width: 660px;
    margin: 0 auto;
    padding: 12px;
    padding-bottom: 20px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #000;
    box-shadow: inset 0 -3px #000;
`;

const Item = styled.li`
    display: block;
    padding: 5px;
    transition: transform 0.2s;
`;

export class Alphabet extends React.PureComponent {
    handleClick = letter => () => {
        const {onClick, issueId} = this.props;

        onClick({
            letter,
            issueId,
        });
    };

    renderLetter = ({letter, active}) => {
        return (
            <Item key={letter}>
                <Letter isActive={active} onClick={this.handleClick(letter)}>
                    {letter}
                </Letter>
            </Item>
        );
    };

    render() {
        const {alphabet} = this.props;

        return <List>{alphabet.map(this.renderLetter)}</List>;
    }
}
