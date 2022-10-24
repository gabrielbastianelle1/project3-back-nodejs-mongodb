const User = require('../models/model.User')

let adminService = {
    getAllUsers: async function(){

        return new Promise( async (resolve,reject) => {
            User.find({},(err,result) => {
                if(err){ 
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }
}

module.exports = adminService