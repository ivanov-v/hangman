import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {getCoins} from '@/selectors';
import {CoinsRaw} from '@/components/CoinsRaw';

const mapStateToProps = state => ({
    coins: getCoins(state),
});

export const Coins = connect(mapStateToProps)(CoinsRaw);
