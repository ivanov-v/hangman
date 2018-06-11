import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Header} from '@/containers/Header/index';
import {Gallows} from '@/containers/Gallows/index';
import {AlphabetContainer} from '@/containers/AlphabetContainer';
import {Coins} from '@/containers/Coins';

const GallowsSection = styled.section`
    position: relative;
`;

const StyledCoins = styled(Coins)`
    position: absolute;
    top: 0;
    right: 0;
`;

export class GamePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <GallowsSection>
                    <Gallows />
                    <StyledCoins />
                </GallowsSection>
                <AlphabetContainer />
            </div>
        );
    }
}
