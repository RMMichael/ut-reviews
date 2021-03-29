const express = require('express')
const app = express()
const { Pool } = require('pg');
const {
  DB_URL,
  NODE_ENV,
  BACKEND_PORT
} = process.env;

console.log(DB_URL);

const pool = new Pool({
  connectionString: DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM t');
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});
app.get('/api/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM t');
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});
// router.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

console.log("port == " + BACKEND_PORT)
app.get('/', (req, res) => {
  res.send(NODE_ENV)
})

app.listen(BACKEND_PORT, () => {
  console.log(`Example app listening at http://localhost:${BACKEND_PORT}`)
})
