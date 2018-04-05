import React from 'react';
import {connect} from 'react-redux';

import {checkAndUpdateAnswer} from '../../actions';
import {Alphabet} from '../../components/Alphabet';

const mapStateToProps = state => {
    return {
        alphabet: state.alphabet,
        issueId: state.issue.issueId,
    };
};

const mapDispatchToProps = dispatch => ({
    onClick: data => dispatch(checkAndUpdateAnswer(data))
});

export const AlphabetContainer = connect(mapStateToProps, mapDispatchToProps)(Alphabet);