require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/authRoutes')

const app = express()

const port = 3000

const dbURI = 'mongodb://127.0.0.1:27017/blogdb'
mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true})
    .then((result) => app.listen(port))
    .catch((err) => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)