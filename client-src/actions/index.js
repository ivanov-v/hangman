export const CHECK_LETTER = 'CHECK_LETTER';

export const checkLetter = letter => ({
    type: CHECK_LETTER,
    payload: {
        letter
    }
});