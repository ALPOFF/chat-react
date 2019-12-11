const express = require('express');
const port = 3000;
const http = require('http');
const app = express();
const socketIO = require('socket.io');


const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
    console.log('a user connected');

    socket.on('disconnect', reason => {
        console.log('user disconnected');
    });

    socket.on('room', data => {
        console.log('room join');
        console.log(data);
        socket.join(data.room);
    });

    socket.on('leave room', data => {
        console.log('leaving room');
        console.log(data);
        socket.leave(data.room)
    });

    /*socket.on('new message', data => {
        console.log(data.room);
        socket.broadcast
            .to(data.room)
            .emit('receive message', data)
    });*/

    socket.on('new message', data => {
        console.log(data.newMsgData);
        socket.broadcast
            .to(data.room)
            .emit('receive message', data)
    });
});

server.listen(port);
