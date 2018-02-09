const express = require('express');
const issues = require('./issues');

const app = express();

app.get('/api/issue', (req, res) => {
    const randomIssue = issues.getRandomIssue();

    res.json({
        data: randomIssue
    });
});

app.get('/api/letters', (req, res) => {
    const issueId = parseInt(req.query.issueId, 10);
    const letter = req.query.letter;

    const positions = issues.getLettersPosition(issueId, letter);

    res.json({
        data: {
            positions
        }
    });
});

app.listen(3000, () => console.log('SERVER START'));
