import pg from 'pg';

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : undefined,
  database: process.env.PGDATABASE,
};

console.log(config.host);
console.log(process.env.PGHOST);

export const pool = new pg.Pool(config);
