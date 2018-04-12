import axios from 'axios';
import {
    isWin,
    isGameOver,
} from '../selectors';

export const CHECK_LETTER = 'CHECK_LETTER';
export const RESET_STATE = 'RESET_STATE';
export const SET_LETTER = 'SET_LETTER';
export const SET_ISSUE = 'SET_ISSUE';
export const CHANGE_PAGE = 'CHANGE_PAGE';
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

export const setLetter = letter => ({
    type: SET_LETTER,
    payload: {
        letter
    }
});

export const resetState = () => ({
    type: RESET_STATE
});

export const changePage = pageId => ({
    type: CHANGE_PAGE,
    payload: {
        pageId
    }
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

