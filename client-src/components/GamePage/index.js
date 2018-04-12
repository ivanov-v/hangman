import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from '~/containers/Header/index';
import {Gallows} from '~/containers/Gallows/index';
import {AlphabetContainer} from '~/containers/AlphabetContainer';

export class GamePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Gallows />
                <AlphabetContainer />
            </div>
        );
    }
}
