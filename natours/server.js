import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env' });

let DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
).replace('<username>', process.env.DATABASE_USER);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
  })
  .then((connection) => {
    // console.log(connection);
    console.log('DB connected 👍');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('App is running on ' + port);
});
