const issues = [
    {
        id: 1,
        issue: 'В чем носят учебники?',
        answer: 'портфель'
    },
    {
        id: 2,
        issue: 'Российская IT компания',
        answer: 'яндекс'
    },
    {
        id: 3,
        issue: 'Программа для просмотра сайтов',
        answer: 'браузер'
    }
];

const getRandomIssue = () => {
    const issuesLength = issues.length;
    const randomIssueIndex = Math.floor(Math.random() * issuesLength);
    const randomIssue = issues[randomIssueIndex];
    const answerLength = randomIssue.answer.length;

    return {
        issueId: randomIssue.id,
        issue: randomIssue.issue,
        answerLength
    };
};

const getLettersPosition = (issueId, acceptedLetter) => {
    const issue = issues.find(issue => issue.id === issueId);

    return issue.answer
        .split('')
        .reduce((acc, letter, index) => {
            if (acceptedLetter === letter) {
                acc.push(index);
            }

            return acc;
        }, []);
};

module.exports = {
    getRandomIssue,
    getLettersPosition
};