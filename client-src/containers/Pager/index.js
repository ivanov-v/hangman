import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {getRoute} from '@/selectors';
import {ROUTES} from '@/routes';
import {GamePage} from '@/components/GamePage';
import {HomePage} from '@/containers/HomePage';
import {PausePage} from '@/containers/PausePage';

const mapStateToProps = state => ({
    route: getRoute(state),
});

class PagerRaw extends React.Component {
    render() {
        switch (this.props.route) {
            case ROUTES.HOME:
                return <HomePage />;
            case ROUTES.GAME:
                return <GamePage />;
            case ROUTES.PAUSE:
                return <PausePage />;
            case ROUTES.CATEGORIES:
                return <PausePage />;
        }
    }
}

export const Pager = connect(mapStateToProps)(PagerRaw);
