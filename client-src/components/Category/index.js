import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import FoodIcon from '~/icons/food.svg';
import AnimalsIcon from '~/icons/animals.svg';
import SportIcon from '~/icons/sport.svg';
import LockIcon from '~/icons/lock.svg';
import PlayIcon from '~/icons/play.svg';
import CoinsIcon from '~/icons/coins.svg';

const ICONS = {
    food: <FoodIcon />,
    animals: <AnimalsIcon />,
    sport: <SportIcon />,
};

const Root = styled.div`
    position: relative;
    border: 1px solid #000;
    border-radius: 8px;
    min-height: 50px;

    svg {
        display: block;
    }
`;

const Icon = styled.div`
    position: absolute;
    top: 50%;
    left: 10px;
    width: 30px;
    transform: translateY(-50%);
`;

const Control = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
`;

const Title = styled.span`
    position: absolute;
    top: 11px;
    left: 57px;
    font-size: 22px;
`;

const Coins = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 13px;
    left: 235px;
    font-size: 17px;
`;

const CoinsIconStyled = styled(CoinsIcon)`
    height: 25px;
    margin-right: 4px;
`;

export class Category extends React.Component {
    static defaultProps = {
        onClick: () => {},
        locked: true,
    };

    render() {
        const {type, locked, onClick, title, coins} = this.props;

        return (
            <Root>
                <Icon>{ICONS[type]}</Icon>
                <Title>{title}</Title>
                <Coins>
                    <CoinsIconStyled />
                    {coins}
                </Coins>
                <Control>
                    {locked ? (
                        <LockIcon height={30} />
                    ) : (
                        <PlayIcon onClick={onClick} height={30} />
                    )}
                </Control>
            </Root>
        );
    }
}
