const express = require('express')
const app = express()
const { Pool } = require('pg');
const port = process.env.BACKEND_PORT
const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;

// DATABASE_URL=postgres://localhost:5432/rick?sslmode=disable
const db_url = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=disable`;

console.log(db_url);

const pool = new Pool({
  connectionString: db_url,
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

console.log("port == " + port)
app.get('/', (req, res) => {
  res.send(process.env.NODE_ENV)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
