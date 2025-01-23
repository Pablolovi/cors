const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        res.json(response.data.results);
    } catch (error) {
        res.status(500).send('Error fetching characters');
    }
});

app.get('/characters/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
        res.json(response.data.results);
    } catch (error) {
        res.status(404).send('Character not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});