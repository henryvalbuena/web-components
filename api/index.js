import '@babel/polyfill';
import express from 'express';
import { Pool } from 'pg';

const PORT = process.env.PORT || 4000;
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_URI || 'postgres_db',
  database: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

const app = express();

app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (err, data) => {
    if (err) {
      res.status(400).json(
        {
          message: 'Error connecting database',
          error: err,
        },
      );
    } else {
      res.status(200).json(
        {
          message: 'Database connected',
          time: data.rows[0],
        },
      );
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});
