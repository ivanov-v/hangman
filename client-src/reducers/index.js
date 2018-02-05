import {CHECK_LETTER} from '../actions';

export const reducer = (state, {type, payload}) => {
    switch (type) {
        case CHECK_LETTER:
            return Object.assign({}, state, {
                activeLetters: state.activeLetters.concat(payload.index)
            });
        default:
            return state;
    }
};