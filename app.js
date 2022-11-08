const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello Word!')
})

app.post('/login', () => {

})

app.post('/team/pokemons', () => {
    res.status(200).send('Hello Word!')
})

app.get('/team', () => {
    res.status(200).send('Hello Word!')
})

app.delete('/team/pokemons/:pokeid', () => {
    res.status(200).send('Hello Word!')
})

app.put('/team', () => {
    res.status(200).send('Hello Word!')
})

app.listen(PORT, () => {
    console.log('Server starte at port '+ PORT)
})

exports.app = app;