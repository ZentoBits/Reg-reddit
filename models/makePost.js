'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('makePost', {
  img: {type: String, required: true},
  subject: {type: String, required: true},
  url: {type: String, required: true},
  vote: {type: Number, default: 0}
})
