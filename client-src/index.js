import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {App} from './components/App';
import {reducer} from './reducers';

const alphabet = [
    'а', 'б', 'в', 'г', 'д', 'е',
    'ё', 'ж', 'з', 'и', 'й', 'к',
    'л', 'м', 'н', 'о', 'п', 'р',
    'с', 'т', 'у', 'ф', 'х', 'ц',
    'ч', 'ш', 'щ', 'ъ', 'ы', 'ь',
    'э', 'ю', 'я'
];

const state = {
    alphabet,
    activeLetters: []
};

const store = createStore(reducer, state);
const rootElem = document.getElementById('root');
store.subscribe(() => {
    console.log(store.getState());
});
const main = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(main, rootElem);
