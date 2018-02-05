export const CHECK_LETTER = 'CHECK_LETTER';

export const checkLetter = index => ({
    type: CHECK_LETTER,
    payload: {
        index
    }
});