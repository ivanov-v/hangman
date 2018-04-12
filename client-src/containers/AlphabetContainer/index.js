import React from 'react';
import {connect} from 'react-redux';

import {checkAndUpdateAnswer} from '~/actions';
import {Alphabet} from '~/components/Alphabet';
import {
    getAlphabet,
    getIssueId,
} from '~/selectors';

const mapStateToProps = state => {
    return {
        alphabet: getAlphabet(state),
        issueId: getIssueId(state),
    };
};

const mapDispatchToProps = dispatch => ({
    onClick: data => dispatch(checkAndUpdateAnswer(data))
});

export const AlphabetContainer = connect(mapStateToProps, mapDispatchToProps)(Alphabet);