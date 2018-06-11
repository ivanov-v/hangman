import {combineReducers} from 'redux';
import {
    CHECK_LETTER,
    SET_ISSUE,
    DIE,
    SET_LETTER,
    RESET_STATE,
    CHANGE_PAGE,
    ADD_COINS,
    RESET_COINS,
} from '@/actions';
import {ROUTES} from '@/routes';

// prettier-ignore
const alphabetMap = [
    'й', 'ц', 'у', 'к', 'е', 'н',
    'г', 'ш', 'щ', 'з', 'х', 'ъ',
    'ф', 'ы', 'в', 'а', 'п', 'р',
    'о', 'л', 'д', 'ж', 'э', 'ё',
    'я', 'ч', 'с', 'м', 'и', 'т',
    'ь', 'б', 'ю'
];

const createAlphabetState = alphabet => alphabet.map(letter => ({active: false, letter}));

const initialAlphabet = createAlphabetState(alphabetMap);

const letter = (state = {}, {type}) => {
    switch (type) {
        case CHECK_LETTER:
            return {
                ...state,
                active: true,
            };
        default:
            return state;
    }
};

const alphabet = (state = initialAlphabet, action) => {
    switch (action.type) {
        case CHECK_LETTER:
            return state.map(letterState => {
                if (letterState.letter === action.payload.letter) {
                    return letter(letterState, action);
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
                [payload.letter.letter]: payload.letter.positions,
            };

            return {
                ...state,
                ...letter,
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

const coins = (state = 0, {type, payload}) => {
    switch (type) {
        case ADD_COINS:
            return state + payload;
        case RESET_COINS:
            return 0;
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
    coins,
});

export const rootReducer = (state, action) => {
    if (action.type === RESET_STATE) {
        state = undefined;
    }

    return reducer(state, action);
};
