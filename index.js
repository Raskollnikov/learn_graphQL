const express = require('express')
const userData  = require('./MOCK_DATA.json');

const app = express();
const PORT = 3000;

app.get('/users', (req, res) => {
    res.json(userData); 
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
