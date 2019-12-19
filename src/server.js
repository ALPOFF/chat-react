const express = require('express');
const cors = require('cors');
const port = 3000;
const http = require('http');
const app = express();
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
app.use(express.json());

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
            dialogUsers: [0, 2],
            msg: [
                {userId: 0, userName: 'Alex', msgId: 0, text: 'Hello', textData: '1', userIcon: null},
                {userId: 2, userName: 'Luise', msgId: 1, text: 'How are you?', textData: '2', userIcon: null},
                {userId: 0, userName: 'Alex', msgId: 2, text: 'Fine...', textData: '3', userIcon: null}
            ]
        },
        {
            dialogId: 1,
            dialogUsers: [4, 2],
            msg: [
                {userId: 4, userName: 'Custom', msgId: 0, text: 'Bye!', textData: '1', userIcon: null}
            ]
        },
        {
            dialogId: 2,
            dialogUsers: [3, 2],
            msg: [
                {userId: 2, userName: 'Luise', msgId: 0, text: 'When we can meet?', textData: '1', userIcon: null},
                {userId: 2, userName: 'Luise', msgId: 1, text: 'At five oclock?' , textData: '2', userIcon: null},
                {userId: 3, userName: 'Elise', msgId: 2, text: 'No problems', textData: '3', userIcon: null}
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

app.get('/', (req, res) => {
    let dialogsList = [];
    store.dialogs.map(d => dialogsList.push({dialogId: d.dialogId, lastMsg: d.msg[d.msg.length-1]}));
    res.send(dialogsList);
});

app.get('/dialogs/:id', (req, res) => {
    let filteredDialogId = store.dialogs.filter(d => d.dialogId == req.params.id);
    res.send(filteredDialogId);
    //console.log(req)
    //return res.send('Received a get HTTP method');
});

app.post('/dialogs/', (req, res) => {
    console.log(req.body);
    //return res.send('Received a get HTTP method');
});

server.listen(port);
