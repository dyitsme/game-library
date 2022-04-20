const User = require('../models/users')

const createUser = (req, res) => {
    const user = new User({
        username: 'Diego',
        email: 'diego.holland@example.com',
        password: '1234'
    })

    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log("Error");
            console.log(err);
        })
}

module.exports = {
    createUser
}