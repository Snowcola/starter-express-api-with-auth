import mongoose from 'mongoose';
import 'dotenv/config';

const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;
console.log('password', password, user);
mongoose.set('useCreateIndex', true);
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0-jjcqw.mongodb.net/ProverControl?retryWrites=true`,
    { useNewUrlParser: true }
  )
  .catch((err) => console.log(err));
