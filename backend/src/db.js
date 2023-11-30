import pg from 'pg';

const {Pool} = pg;

const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_POST,
  database: process.env.DB_DATABASE,
});

export default pool;