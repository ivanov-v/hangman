export const getLettersCount = state =>
    Object.keys(state.letters).reduce((acc, letter) => {
        return state.letters[letter].length + acc;
    }, 0);

export const isWin = state => {
    return getLettersCount(state) === state.issue.answerLength;
};

export const isGameOver = state => {
    return state.lives === 0;
};

export const getLetter = (state, index) => {
    const {letters} = state;
    const lettersKeys = Object.keys(letters);
    let findLetter;

    lettersKeys.forEach((letter) => {
        const pos = letters[letter].find(pos => pos === index);

        if (pos !== undefined) {
            findLetter = letter;
        }
    });

    return findLetter;
};

export const getWord = state =>
    [...Array(state.issue.answerLength)]
        .map((item, index) => getLetter(state, index) || '_')
        .join('');

export const getIssue = state => state.issue.text;
export const getLives = state => state.lives;
export const getAlphabet = state => state.alphabet;
export const getIssueId = state => state.issue.issueId;
export const getRoute = state => state.route;