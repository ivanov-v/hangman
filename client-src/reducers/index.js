import {CHECK_LETTER, SET_ISSUE} from '../actions';

export const reducer = (state, {type, payload}) => {
    switch (type) {
        case CHECK_LETTER:
            return Object.assign({}, state, {
                alphabet: state.alphabet.map(letterState => {
                    if (letterState.letter === payload) {
                        return Object.assign({}, letterState, {active: true});
                    }

                    return letterState;
                })
            });
        case SET_ISSUE:
            return Object.assign({}, state, {
                issue: payload
            });
        default:
            return state;
    }
};