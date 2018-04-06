import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {HeaderRaw} from '../../components/HeaderRaw';

const getLetter = (state, index) => {
    const {letters} = state;
    const lettersKeys = Object.keys(letters);
    let findLetter;

    lettersKeys.forEach((letter) => {
        const pos = letters[letter].find(pos => pos === index);

        if (pos !== undefined) {
            findLetter = letter;
        }
    });

    return findLetter;
};

const getWord = state =>
    [...Array(state.issue.answerLength)]
        .map((item, index) => getLetter(state, index) || '_')
        .join('');

const mapStateToProps = state => {
    return {
        text: state.issue.text,
        word: getWord(state),
        lives: state.lives,
    };
};

export const Header = connect(mapStateToProps)(HeaderRaw);