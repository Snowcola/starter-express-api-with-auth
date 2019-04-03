import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser';
import db from './db';

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/users', routes.user);
app.use('/api/auth', routes.auth);

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on my port ${process.env.PORT}`)
);
