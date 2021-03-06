const express = require('express');
const issues = require('./issues');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/api/issue', (req, res) => {
    const randomIssue = issues.getRandomIssue();

    res.json({
        randomIssue,
    });
});

app.get('/api/letters', (req, res) => {
    const issueId = parseInt(req.query.issueId, 10);
    const letter = req.query.letter;
    const positions = issues.getLettersPosition(issueId, letter);

    res.json({
        letter,
        positions,
    });
});

app.listen(3000, () => console.log('SERVER START'));
