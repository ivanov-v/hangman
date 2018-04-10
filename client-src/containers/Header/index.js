import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {
    getWord,
    getIssue,
} from '../../selectors';
import {HeaderRaw} from '../../components/HeaderRaw';

const mapStateToProps = state => ({
    text: getIssue(state),
    word: getWord(state),
});

export const Header = connect(mapStateToProps)(HeaderRaw);