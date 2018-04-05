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
        .then(randomIssue => dispatch(setIssue(randomIssue)))
        .catch(error => alert(error));
};

export const newGame = () => dispatch => {
    dispatch(resetState());
    dispatch(getInitialIssue());
};

export const checkAndUpdateAnswer = ({issueId, letter}) => (dispatch, getState) => {
    return axios.get(`http://localhost:3000/api/letters?issueId=${issueId}&letter=${letter}`)
        .then(response => response.data)
        .then(letterState => {
            if (letterState.positions.length === 0) {
                dispatch(die());

                if (getState().lives === 0) {
                    dispatch(newGame());

                    return;
                }
            }

            dispatch(setLetter(letterState));
            dispatch(checkLetter(letter));
        })
        .catch(error => {
            console.log(error);
        });
};

