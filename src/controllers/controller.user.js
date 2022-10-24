const userService = require('../services/service.user')

let userController = {
    getCurrentUser: function(req,res){
        res.status(200).send(req.user)
    }
}

module.exports = userController