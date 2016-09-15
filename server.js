'use strict'

const express = require('express');

const app = express()

const port = process.env.PORT || 3000
app.set('port', port)

app.set('view engine', 'pug')

// middlewares
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
