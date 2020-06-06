// 1: install express

const express = require('express');


// 2: Create API
const api = express(); // returns an instance of express which is our API

// 3: Middlewares

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

// 4: Make Basic Request to Make Sure its Alive
api.get('/', (req, res) => {
  res.json({ message: 'Hello DEV.F' });
});

api.use(require('../routes/UsersRoutes'));


module.exports = api;


// hablar de vista es hablar directamente con el endpoint (en userRoutes.js)
