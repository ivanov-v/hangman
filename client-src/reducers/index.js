import {combineReducers} from 'redux';
import {CHECK_LETTER, SET_ISSUE, DIE, SET_LETTER, RESET_STATE, CHANGE_PAGE} from '../actions';
import {ROUTES} from '../routes';

const alphabetMap = [
    'й', 'ц', 'у', 'к', 'е', 'н',
    'г', 'ш', 'щ', 'з', 'х', 'ъ',
    'ф', 'ы', 'в', 'а', 'п', 'р',
    'о', 'л', 'д', 'ж', 'э', 'ё',
    'я', 'ч', 'с', 'м', 'и', 'т',
    'ь', 'б', 'ю'
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

const route = (state = ROUTES.HOME, {type, payload}) => {
    if (type === CHANGE_PAGE) {
        return payload.pageId;
    }

    return state;
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
