import express from 'express';
import giftsRouter from './routes/gifts.ts';

const app = express();

const PORT = process.env.PORT || 3001;

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>'
    );
});

app.use('/gifts', giftsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
