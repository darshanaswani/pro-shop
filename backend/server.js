const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const path = require('path');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes.js');
const uploadRoutes = require('./routes/uploadRoutes');

const cors = require('cors');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  console.log('root path');
  res.send('Api is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.use('/api/upload', uploadRoutes);

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
