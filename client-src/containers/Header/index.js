import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {getWord, getIssue} from '@/selectors';
import {HeaderRaw} from '@/components/HeaderRaw';
import {changePage} from '@/actions';
import {ROUTES} from '@/routes';

const mapStateToProps = state => ({
    text: getIssue(state),
    word: getWord(state),
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(changePage(ROUTES.PAUSE)),
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderRaw);
