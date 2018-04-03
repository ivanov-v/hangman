import axios from 'axios';

export const CHECK_LETTER = 'CHECK_LETTER';
export const SET_ISSUE = 'SET_ISSUE';

export const checkLetter = letter => ({
    type: CHECK_LETTER,
    payload: letter
});

export const setIssue = issue => ({
    type: SET_ISSUE,
    payload: issue
});

export const loadingComplete = () => ({
    type: LOADING_COMPLETE
});

export const getInitialIssue = () => dispatch => {
    return axios.get('http://localhost:3000/api/issue')
        .then((response) => dispatch(setIssue(response.data.randomIssue)))
        .catch((error) => alert(error));
};

export const checkAndUpdateAnswer = ({issueId, letter}) => dispatch => {
    return axios.get(`http://localhost:3000/api/letters?issueId=${issueId}&letter=${letter}`)
        .then(function (response) {
            console.log(response.data);
            dispatch(checkLetter(letter));
        })
        .catch(function (error) {
            console.log(error);
        });
};

