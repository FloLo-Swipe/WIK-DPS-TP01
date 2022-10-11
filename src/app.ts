import express, { application, json } from 'express';
const app = express();
const port = process.env.PING_LISTEN_PORT;

app.get('/ping', (req, res) => {

  res.send(req.headers);
  res.set({'Content-Type' : 'application/json'})
});

app.get('*', (req, res) => {

  res.sendStatus(404)
  
  ;
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});