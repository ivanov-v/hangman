import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from '../Header';
import {Letter} from '../Letter';
import {Alphabet} from '../Alphabet';

const alphabet = [
    'а', 'б', 'в', 'г', 'д', 'е',
    'ё', 'ж', 'з', 'и', 'й', 'к',
    'л', 'м', 'н', 'о', 'п', 'р',
    'с', 'т', 'у', 'ф', 'х', 'ц',
    'ч', 'ш', 'щ', 'ъ', 'ы', 'ь',
    'э', 'ю', 'я'
];

export class App extends React.PureComponent {
    handleLetterClick = data => {
        console.log(data);
    };

    renderLetter = (letter, index) =>
        <Letter
            onClick={this.handleLetterClick}
            data={letter}
            key={index}
        >
            {letter}
        </Letter>;

    render() {
        return (
            <div>
                <Header />
                <Alphabet>
                    {alphabet.map(this.renderLetter)}
                </Alphabet>
            </div>
        );
    }
}
