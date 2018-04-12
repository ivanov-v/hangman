import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {Header} from '../Header';
import {AlphabetContainer} from '../AlphabetContainer';
import {Gallows} from '../../components/Gallows';
import {changePage} from '../../actions';
import {getRoute} from '../../selectors';
import {ROUTES} from '../../routes';

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
            case ROUTES.GAME:
                return (
                    <Fragment>
                        <Header />
                        <Gallows />
                        <AlphabetContainer />
                    </Fragment>
                );

            case ROUTES.PAUSE:
                return <button onClick={onClick} type='button'>play</button>;
        }
    }
}

export const Pager = connect(mapStateToProps, mapDispatchToProps)(PagerRaw);
