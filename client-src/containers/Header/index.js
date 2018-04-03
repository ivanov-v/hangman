import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {HeaderRaw} from '../../components/HeaderRaw';

const mapStateToProps = state => {
    return {
        text: state.issue.text
    };
};

export const Header = connect(mapStateToProps)(HeaderRaw);