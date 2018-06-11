import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Pager} from '@/containers/Pager';

const Inner = styled.div`
    display: block;
    padding: 20px;
    margin: 0 auto;
    max-width: 705px;
`;

export class App extends React.PureComponent {
    render() {
        return (
            <Inner>
                <Pager />
            </Inner>
        );
    }
}
