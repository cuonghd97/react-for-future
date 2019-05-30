const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const ENV = process.env
const db = mongoose.connection
const PORT = ENV.PORT || 5000

dotenv.config()
mongoose.connect(ENV.DB_HOST, { useNewUrlParser: true })
  .then(() => console.log('Database connected'))
db.on('error', (err) => {
  console.log('Database connection error', err.message)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use((req, res, next) => {
  // try {
    // const token = req.headers.authorization.split(' ')[1]
    // jwt.verify(token, key.tokenKey, (err, payload) => {
      // console.log(payload)
      // if (payload) {
      // }
    // })
  // }
// })

app.listen(PORT, () => {
  console.log(`App run on port ${PORT}`)
})