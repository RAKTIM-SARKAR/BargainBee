require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = process.env.MONGODB_CONNECTION_STRING;

if (!connectionStr) {
  throw new Error("MongoDB connection string is not defined in the environment variables.");
}

// Set strictQuery to false to prepare for Mongoose 7's default change
mongoose.set('strictQuery', false);

mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});
