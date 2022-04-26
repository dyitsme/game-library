const User = require('../models/users')

const createUser = (req, res) => {
    // const user = new User({
    //     username: 'Diego',
    //     email: 'diego.holland@example.com',
    //     password: '1234'
    // })

    // user.save()

        // .then((result) => {
        //     res.send(result);
        // })
        // .catch((err) => {
        //     console.log("Error");
        //     console.log(err);
        // })
    console.log(req.body)
    res.status(201).send('User was created')
}

module.exports = {
    createUser
}