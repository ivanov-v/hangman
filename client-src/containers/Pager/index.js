import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {changePage} from '../../actions';
import {getRoute} from '../../selectors';
import {ROUTES} from '../../routes';
import {GamePage} from '../../components/GamePage';
import {HomePage} from '../HomePage';
import {PausePage} from '../PausePage';


const mapStateToProps = state => ({
    route: getRoute(state),
});

const mapDispatchToProps = dispatch => ({
    onClick() {
        dispatch(changePage(ROUTES.GAME))
    }
});

class PagerRaw extends React.Component {
    render() {
        const {route, onClick} = this.props;

        switch (route) {
            case ROUTES.HOME:
                return <HomePage />;

            case ROUTES.GAME:
                return <GamePage />;

            case ROUTES.PAUSE:
                return <PausePage />;
        }
    }
}

export const Pager = connect(mapStateToProps, mapDispatchToProps)(PagerRaw);
