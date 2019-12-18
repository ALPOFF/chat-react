const express = require('express');
const cors = require('cors');
const port = 3000;
const http = require('http');
const app = express();
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());

let store = {
    testval: 5,
    users: [
        {userId: 0, userName: 'Alex'},
        {userId: 1, userName: 'Edward'},
        {userId: 2, userName: 'Luise'},
        {userId: 3, userName: 'Elise'},
        {userId: 4, userName: 'Custom'}
    ],
    dialogs: [
        {
            dialogId: 0,
            msg: [
                {userId: 0, msgId: 0, text: 'dgdfrr', textData: '1'},
                {userId: 2, msgId: 1, text: 'gdfgds', textData: '2'},
                {userId: 0, msgId: 2, text: 'erterg', textData: '3'}
            ]
        },
        {
            dialogId: 1,
            msg: [
                {userId: 2, msgId: 0, text: 'nbvc', textData: '1'},
                {userId: 1, msgId: 1, text: 'vxcsd', textData: '2'},
                {userId: 2, msgId: 2, text: 'hgdhgd', textData: '3'}
            ]
        },
        {
            dialogId: 2,
            msg: [
                {userId: 2, msgId: 0, text: 'ykyu', textData: '1'},
                {userId: 2, msgId: 1, text: 'rete', textData: '2'},
                {userId: 3, msgId: 2, text: 'kyu', textData: '3'}
            ]
        },

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
    let filteredDialogId = store.dialogs.map(d => d.filter(d => d.dialogId == req.params.id));
    let g = filteredDialogId.map()
    console.log(a)
    res.send(a[0].text)
    //return res.send('Received a get HTTP method');
});

server.listen(port);
