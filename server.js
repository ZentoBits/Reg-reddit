'use strict'

const express = require('express');
const app = express()
const bodyParser = require('body-parser')

// exports
const { connect } = require('./database')
const makePost = require('./models/makePost')

const port = process.env.PORT || 3000
app.set('port', port)

app.set('view engine', 'pug')

// middlewares
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/makePost', (req, res) => {
  res.render('makePost')
})

app.post('/makePost', (req, res) => {
  console.log('touch my body', req.body);
  makePost
  .create(req.body)
  .then(() => res.redirect('/'))
  .catch(console.error)
})

connect()
  .then(() => {
    app.listen(port, () =>
      console.log(`Listening on port: ${port}`)
    )
  })
  .catch(console.error)
