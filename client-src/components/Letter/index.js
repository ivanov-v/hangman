import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Inner = styled.span`
    display: block;
    transition: transform 0.2s;
`;

const Button = styled.button`
    height: 42px;
    width: 42px;
    padding: 0;
    border: 1px solid #000;
    border-radius: 4px;
    outline: none;
    appearance: none;
    box-shadow: inset 0 -3px #000;
    background-color: #fff;
    font-family: 'Stem';
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    transition: box-shadow 0.2s;

    &:disabled {
        opacity: 0.3;
    }

    &:not(:disabled) {
        cursor: pointer;
    }

    &:not(:disabled):active {
        box-shadow: inset 0 -1px;

        ${Inner} {
            transform: translateY(4px);
        }
    }
`;

export class Letter extends React.Component {
    static defaultProps = {
        onClick: () => {},
    };

    render() {
        const {children, isActive, onClick} = this.props;

        return (
            <Button
                className={isActive ? 'active' : ''}
                type="button"
                onClick={onClick}
                disabled={isActive}
            >
                <Inner>{children}</Inner>
            </Button>
        );
    }
}
