/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database Connected'))
  .catch(() => console.log('Error Connecting to Database'));
