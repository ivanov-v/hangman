import axios from 'axios';

export const CHECK_LETTER = 'CHECK_LETTER';
export const RESET_STATE = 'RESET_STATE';
export const SET_LETTER = 'SET_LETTER';
export const SET_ISSUE = 'SET_ISSUE';
export const NEW_GAME = 'NEW_GAME';
export const DIE = 'DIE';

export const checkLetter = letter => ({
    type: CHECK_LETTER,
    payload: {
        letter
    }
});

export const setIssue = issue => ({
    type: SET_ISSUE,
    payload: {
        issue
    }
});

export const die = () => ({
    type: DIE
});

export const loadingComplete = () => ({
    type: LOADING_COMPLETE
});

export const setLetter = letter => ({
    type: SET_LETTER,
    payload: {
        letter
    }
});

export const resetState = () => ({
    type: RESET_STATE
});

export const getInitialIssue = () => dispatch => {
    return axios.get('http://localhost:3000/api/issue')
        .then(response => response.data.randomIssue)
        .then(randomIssue => {
            dispatch(setIssue(randomIssue.issue));
            dispatch(checkLetter(randomIssue.letter.letter));
            dispatch(setLetter(randomIssue.letter));
        })
        .catch(error => alert(error));
};

export const newGame = () => dispatch => {
    dispatch(resetState());
    dispatch(getInitialIssue());
};

const getLettersCount = (state) => {
    return Object.keys(state.letters).reduce((acc, letter) => {
        return state.letters[letter].length + acc;
    }, 0);
};

const isWin = (state) => {
    return getLettersCount(state) === state.issue.answerLength;
};

const isGameOver = (state) => {
    return state.lives === 0;
};

export const checkAndUpdateAnswer = ({issueId, letter}) => (dispatch, getState) => {
    dispatch(checkLetter(letter));

    return axios.get(`http://localhost:3000/api/letters?issueId=${issueId}&letter=${letter}`)
        .then(response => response.data)
        .then(letterState => {
            if (letterState.positions.length === 0) {
                dispatch(die());

                if (isGameOver(getState())) {
                    setTimeout(() => dispatch(newGame()), 1000);
                }
            } else {
                dispatch(setLetter(letterState));

                if (isWin(getState())) {
                    setTimeout(() => dispatch(newGame()), 1000);
                }
            }
        })
        .catch(error => {
            console.log(error);
        });
};

