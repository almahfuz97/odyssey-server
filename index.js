/**
 * https://ibb.co/ThsTRr1 -hotel
https://ibb.co/GHY96zj - hotel
https://ibb.co/VW8y7Mr - hotel
https://ibb.co/rvfY1Jp -cox
https://ibb.co/qjYxvrZ
https://ibb.co/kDfJJbH -sreemangal
https://ibb.co/mJ8JmCv -sundarban
 */
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./data/catergories.json');
const places = require('./data/places.json');

app.get('/', (req, res) => {
    res.send(places)
})
app.get('/home', (req, res) => {
    res.send(places)
})
app.get('/catergories', (req, res) => {
    res.send(categories)
})

app.get('/destination/:id', (req, res) => {
    console.log(req.params.id)
    const selectedDestination = places.find(place => place.id === req.params.id)
    console.log(selectedDestination);
    res.send(selectedDestination);
})

app.listen(port, () => {
    console.log('helllo listening 5000')
})