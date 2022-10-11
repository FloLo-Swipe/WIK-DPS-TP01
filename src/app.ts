import express, { application, json } from 'express';
const app = express();
const PING_LISTEN_PORT = 3000;

app.get('/ping', (req, res) => {

  res.send(req.headers);
  res.set({'Content-Type' : 'application/json'})
});

app.get('*', (req, res) => {

  res.sendStatus(404)
  
  ;
});

app.listen(PING_LISTEN_PORT, () => {
  return console.log(`Express is listening at http://localhost:${PING_LISTEN_PORT}`);
});