const adminService = require('../services/service.admin')

let adminController = {
    getAllUsers: async function(req,res){
        try {
            return res.status(200).json(await adminService.getAllUsers())
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = adminController