import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import {Header} from '../../containers/Header';
import {AlphabetContainer} from '../../containers/AlphabetContainer';

const Inner = styled.div`
    display: block;
    padding: 20px;
`;

export class App extends React.PureComponent {
    render() {
        return (
            <Inner>
                <Header />
                <AlphabetContainer />
            </Inner>
        );
    }
}
