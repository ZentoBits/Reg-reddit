'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Cupcake', {
  img: {type: String, required: true},
  subject: {type: String, required: true},
  url: {type: String, required: true}
})
