const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});

app.use(
    cors({
        origin: 'http://localhost:4200',
        credentials: true
    })
);

app.get('/', (req, res) => {
    res.send('Welcome to Klepetko!');
});

io.on('connection', (socket) => {
    console.log('Somebody is up and running 🔌.');

    socket.emit('test event', 'here is some data');
});

http.listen(3000, () => {
    console.log('Server is online 😉!');
});
