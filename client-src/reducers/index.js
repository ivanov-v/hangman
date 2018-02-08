import {CHECK_LETTER} from '../actions';

export const reducer = (state, {type, payload}) => {
    switch (type) {
        case CHECK_LETTER:
            return {
                alphabet: state.alphabet.map(letterState => {
                    if (letterState.value === payload.letter) {
                        return Object.assign({}, letterState, {active: true});
                    }

                    return letterState;
                })
            };
        default:
            return state;
    }
};