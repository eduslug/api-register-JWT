const Use = require('../models/User');

const userController = {
    register: async function (req, resp) {
        const user = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        try {
            const saveUser = await user.save()
            resp.send(saveUser)
        } catch (error) {
            resp.status(400).send(error)
        }
    },
    login: function (req, resp) {
        console.log('Login');
        resp.send('login');
    }
}

module.exports = userController;