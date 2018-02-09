import axios from 'axios';

export const CHECK_LETTER = 'CHECK_LETTER';

export const checkLetter = letter => ({
    type: CHECK_LETTER,
    payload: {
        letter
    }
});

export const getInitialIssue = () => dispatch => {
    return axios.get('http://localhost:3000/api/issue')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const checkAndUpdateAnswer = ({issueId, letter}) => dispatch => {
    return axios.get(`http://localhost:3000/api/letters?issueId=${issueId}&letter=${letter}`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

