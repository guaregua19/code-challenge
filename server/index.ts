import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.use(express.json());
app.use(router)