const User = require('../models/users')

const createUser = (req, res) => {
    const { username, email, password, confirmPassword } = req.body
    const user = new User({
        username: username,
        email: email,
        password: password
    })
    
    if (password == confirmPassword) {
        user.save()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log("Error");
                console.log(err);
            })
        res.status(201).send('User was created')
    }
    else {
        console.log("Password and confirm password do not match")
        res.status(403).send('Password and confirm password do not match')
    }
    console.log(req.body)
}

const loginUser = (req, res) => {
    console.log('hello')
    console.log(req.body)
}

module.exports = {
    createUser,
    loginUser
}