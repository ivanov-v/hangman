import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {changePage} from '@/actions';
import {ROUTES} from '@/routes';
import {PausePageRaw} from '@/components/PausePageRaw';

const mapDispatchToProps = dispatch => ({
    onPlay() {
        dispatch(changePage(ROUTES.GAME));
    },

    onHome() {
        dispatch(changePage(ROUTES.HOME));
    },
});

export const PausePage = connect(
    null,
    mapDispatchToProps
)(PausePageRaw);
