import express from 'express';
import sequelize from './config/sequelize';

const app = express();

const port = process.env.PORT ?? 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

sequelize
  .sync()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log('All models were synchronized successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });