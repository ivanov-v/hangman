import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 30px;
`;

const Word = styled.div`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 8px;
`;

export class HeaderRaw extends React.Component {
    render() {
        const {text, word, lives} = this.props;

        return (
            <header>
                <Title>Категория: {text}</Title>
                <Word>{word}</Word>
            </header>
        );
    }
}
