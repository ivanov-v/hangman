import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from '../../containers/Header';
import {AlphabetContainer} from '../../containers/AlphabetContainer';

export class App extends React.PureComponent {
    render() {
        return (
            <div>
                <Header />
                <AlphabetContainer />
            </div>
        );
    }
}
