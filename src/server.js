const express = require('express');
const cors = require('cors')
const port = 3000;
const http = require('http');
const app = express();
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors())

let store = {
    testval: 5,
    users: [
        {userId: 0, userName: 'Alex'},
        {userId: 1, userName: 'Edward'},
        {userId: 2, userName: 'Luise'},
        {userId: 3, userName: 'Elise'}
    ]
};

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.get('/users/', (req, res) => {
    res.json(store.users)
    //return res.send('Received a get HTTP method');
});

server.listen(port);
