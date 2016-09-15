'use strict'

const mongoose = require('mongoose')

const MONGOOSE_URL = 'mongodb://localhost:27017/regreddit'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGOOSE_URL)
