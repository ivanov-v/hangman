import {combineReducers} from 'redux';
import {CHECK_LETTER, SET_ISSUE, DIE, SET_LETTER, RESET_STATE, PLAY, PAUSE} from '../actions';

const alphabetMap = [
    'а', 'б', 'в', 'г', 'д', 'е',
    'ё', 'ж', 'з', 'и', 'й', 'к',
    'л', 'м', 'н', 'о', 'п', 'р',
    'с', 'т', 'у', 'ф', 'х', 'ц',
    'ч', 'ш', 'щ', 'ъ', 'ы', 'ь',
    'э', 'ю', 'я'
];

const createAlphabetState = alphabet =>
    alphabet.map(letter => ({ active: false, letter }));

const initialAlphabet = createAlphabetState(alphabetMap);

const alphabet = (state = initialAlphabet, {type, payload}) => {
    switch (type) {
        case CHECK_LETTER:
            return state.map(letterState => {
                if (letterState.letter === payload.letter) {
                    return Object.assign({}, letterState, {active: true});
                }

                return letterState;
            });
        default:
            return state;
    }
};

const lives = (state = 4, {type}) => {
    switch (type) {
        case DIE:
            return --state;
        default:
            return state;
    }
};

const issue = (state = {}, {type, payload}) => {
    switch (type) {
        case SET_ISSUE:
            return payload.issue;
        default:
            return state;
    }
};

const letters = (state = {}, {type, payload}) => {
    switch (type) {
        case SET_LETTER:
            const letter = {
                [payload.letter.letter]: payload.letter.positions
            };

            return {
                ...state,
                ...letter
            };
        default:
            return state;
    }
};

const route = (state = 'game', {type}) => {
    switch (type) {
        case PLAY:
            return 'game';
        case PAUSE:
            return 'pause';
        default:
            return state;
    }
};

export const reducer = combineReducers({
    alphabet,
    lives,
    issue,
    letters,
    route,
});

export const rootReducer = (state, action) => {
    if (action.type === RESET_STATE) {
        state = undefined;
    }

    return reducer(state, action);
};
