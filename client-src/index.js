import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {App} from './components/App';
import {reducer} from './reducers';
import {getInitialIssue} from './actions'

const alphabet = [
    'а', 'б', 'в', 'г', 'д', 'е',
    'ё', 'ж', 'з', 'и', 'й', 'к',
    'л', 'м', 'н', 'о', 'п', 'р',
    'с', 'т', 'у', 'ф', 'х', 'ц',
    'ч', 'ш', 'щ', 'ъ', 'ы', 'ь',
    'э', 'ю', 'я'
];

const createAlphabetState = alphabet =>
    alphabet.map(letter => ({ active: false, letter }));

const state = {
    alphabet: createAlphabetState(alphabet)
};

const store = createStore(
    reducer,
    state,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getInitialIssue());

const main = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
