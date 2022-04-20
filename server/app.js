const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/db')
const app = express()

const dbURI = 'mongodb://127.0.0.1:27017/blogdb'
mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'blog 2',
        snippet: 'about',
        body: 'more about blog 2'
    })

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log("Error")
            console.log(err)
        })
})
