import { pool } from '../config/database.js';
import { Request, Response } from 'express';

const getGifts = async (req: Request, res: Response) => {
  try {
    const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC');
    res.status(200).json(results.rows);
  } catch (error) {
    if (error instanceof Error) {
      res.status(409).json({ error: error.message });
    } else {
      res.status(409).json({ error: 'Unknown error' });
    }
  }
};

export default {
  getGifts,
};
