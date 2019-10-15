import '@babel/polyfill';
import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  // console.log(path.join(__dirname, 'public', 'index.html'));
  // res.json({ message: 'Hello' });
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});
