import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {checkLetter} from '../../actions';

import {Alphabet} from '../../components/Alphabet';
import {Letter} from '../../components/Letter';

const mapStateToProps = state => {
    return {
        alphabet: state.alphabet
    };
};

const mapDispatchToProps = dispatch => ({
    onClick: data => dispatch(checkLetter(data))
});

export const AlphabetContainer = connect(mapStateToProps, mapDispatchToProps)(Alphabet);