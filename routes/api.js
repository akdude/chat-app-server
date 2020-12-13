const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
  app_id : "1052554",
  key : "32a680012e60b375e014",
  secret : "b596c5b008a211bbb0e1",
  cluster : "ap2"
});

let messages = [];

router.get('/', (req, res) => {
  res.send('all good');
});

router.post('/pusher/auth', (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

module.exports = router;
