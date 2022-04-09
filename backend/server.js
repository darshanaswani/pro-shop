const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const productRoutes = require('./routes/productRoutes');
const {
  notFound,
  erroHandler,
  errorHandler,
} = require('./middleware/errorMiddleware');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

app.use(cors());

connectDB();

app.get('/', (req, res) => {
  console.log('root path');
  res.send('Api is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
