
// Express server
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

app.use(
    cors({
        origin: 'http://localhost:4200',
        credentials: true
    })
);

// Socket.io
const io = require('socket.io');

// io.on('connection', (socket) => {
//     console.log(socket, ' connected');
// });

app.get('/homepage', (req, res) => {
    res.sendFile(__dirname + '/homepage.json');
});

// Start server
server.listen(3000, () => {
    console.log('Server started on port 3000');
});
