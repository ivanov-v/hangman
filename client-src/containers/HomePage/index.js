import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {changePage} from '~/actions';
import {ROUTES} from '~/routes';
import {HomePageRaw} from '~/components/HomePageRaw';

const mapDispatchToProps = dispatch => ({
    onPlay() {
        dispatch(changePage(ROUTES.GAME));
    },
});

export const HomePage = connect(null, mapDispatchToProps)(HomePageRaw);
