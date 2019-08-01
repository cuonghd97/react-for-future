const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const multer = require('multer')
const bcrypt = require('bcrypt')
const User = require('./user')

// Dotenv
dotenv.config()
const ENV = process.env

// Connect mongo
const db = mongoose.connection;
mongoose.connect(ENV.DB_HOST, { useNewUrlParser: true })
  .then(() => console.log('Db connected'))
mongoose.set('useCreateIndex', true)
db.on('error', err => {
  console.log('DB connect error ', err.message)
})

// Express
const app = express()

// Multer
const upload = multer()

app.use(bodyParser.json())

// middleware
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  const decoded = jwt.verify(token, ENV.TOKEN_KEY)
  const user = await User.findById(decoded.userId)
  if (user) {
    next()
  } else {
    res.send({ message: "error" })
  }
}

app.post('/api/auth/login', upload.array(), async (req, res) => {
  console.log(req.body)
  const { ...postData } = req.body
  const user = await User.findOne({ email: postData.email })
  if (user) {
    const isMatchPass = await bcrypt.compare(postData.password, user.password)
    if (isMatchPass) {
      const token = jwt.sign({ userId: user.id }, ENV.TOKEN_KEY)
      res.status(200).send({
        email: user.email,
        id: user._id,
        token: token
      })
    } else {
      res.status(401).send({ 'message': 'Wrong password' })
    }
  } else {
    res.status(404).send({ 'message': 'User not exist' })
  }
})

app.get('/api/user', verifyToken, async (req, res) => {
  console.log(req.user)
  res.send({ "message": "get user" })
})

app.post('/api/register', upload.array(), async (req, res) => {
  const { ...postData } = req.body
  console.log(postData)
  const hashedPass = await bcrypt.hash(postData.password, 10)
  try {
    const newUser = new User({
      fullname: postData.fullname,
      email: postData.email,
      password: hashedPass
    })
    await newUser.save()
    const token = jwt.sign({ userId: User.id }, ENV.TOKEN_KEY, { algorithm: 'ES512'})
    res.status(201).send({ ...postData, token })
  } catch(e) {
    console.log(e)
    res.status(500).send({ 'message': 'Internal server error' })
  }
  // res.send(req.body)
})

app.get('/api/logout', verifyToken, (req, res) => {

})

app.listen(ENV.PORT, () => {
  console.log(`Server run on port ${ENV.PORT}`)
})