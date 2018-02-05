import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from '../Header';
import {AlphabetContainer} from '../../containers/AlphabetContainer';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AlphabetContainer />
            </div>
        );
    }
}
