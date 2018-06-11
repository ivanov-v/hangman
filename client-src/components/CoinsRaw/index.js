import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CoinsIcon from '@/icons/coins.svg';

const Root = styled.div`
    display: flex;
`;

const StyledCoinsIcon = styled(CoinsIcon)`
    height: 20px;
`;

const CoinsCount = styled.span`
    font-size: 15px;
`;

export class CoinsRaw extends React.Component {
    render() {
        const {coins, className} = this.props;

        return (
            <Root className={className}>
                <StyledCoinsIcon />
                <CoinsCount>{coins}</CoinsCount>
            </Root>
        );
    }
}
