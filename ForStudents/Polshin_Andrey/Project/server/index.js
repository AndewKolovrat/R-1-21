const express = require('express');

const app = express();
app.use(express.json());

const chatController = require('./controllers/chat');

app.get('/chats/', chatController.load);

app.listen(9090, () => {
    console.log('Listen on 9090 port...');
});