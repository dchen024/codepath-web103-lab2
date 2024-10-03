import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config({ path: './.env.local' });

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : undefined,
  database: process.env.PGDATABASE,
};

export const pool = new pg.Pool(config);
