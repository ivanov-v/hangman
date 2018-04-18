const categories = [
    {
        id: 1,
        value: 'еда',
    },
    {
        id: 2,
        value: 'спорт',
    },
    {
        id: 3,
        value: 'животные',
    },
];

const issues = [
    {
        id: 1,
        issue: 'еда',
        answer: 'яблоко',
    },
    {
        id: 2,
        issue: 'спорт',
        answer: 'футбол',
    },
    {
        id: 3,
        issue: 'животные',
        answer: 'капибара',
    },
    {
        id: 4,
        issue: 'животные',
        answer: 'кошка',
    },
    {
        id: 5,
        issue: 'животные',
        answer: 'гамадрил',
    },
    {
        id: 6,
        issue: 'животные',
        answer: 'сколопендра',
    },
];

const getLettersPosition = (issueId, acceptedLetter) => {
    const issue = issues.find(issue => issue.id === issueId);

    return issue.answer.split('').reduce((acc, letter, index) => {
        if (acceptedLetter === letter) {
            acc.push(index);
        }

        return acc;
    }, []);
};

const getRandomIssue = () => {
    const issuesLength = issues.length;
    const randomIssueIndex = Math.floor(Math.random() * issuesLength);
    const randomIssue = issues[randomIssueIndex];
    const answerLength = randomIssue.answer.length;
    const answerFirstLetter = randomIssue.answer[0];
    const letterPositions = getLettersPosition(randomIssue.id, answerFirstLetter);
    const letter = {
        letter: answerFirstLetter,
        positions: letterPositions,
    };
    const issue = {
        issueId: randomIssue.id,
        text: randomIssue.issue,
        answerLength,
    };

    return {
        issue,
        letter,
    };
};

module.exports = {
    getRandomIssue,
    getLettersPosition,
};
