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
    ],
    testPage: [
        {id: 0, text: 'zero page'},
        {id: 1, text: 'first page'},
        {id: 2, text: 'second page'},
        {id: 3, text: 'third page'},
        {id: 4, text: 'fourth page'}
    ]
};

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.get('/dialogs/:id', (req, res) => {
    let a = store.testPage.filter(d => d.id == req.params.id);
    console.log(a)
    res.send(a[0].text)
    //return res.send('Received a get HTTP method');
});

server.listen(port);
