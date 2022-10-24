const User = require('../models/model.User')
const jwt = require('jsonwebtoken')

let authService = {
    signup: async function(req){
        return new Promise( async (resolve,reject) => {
            newUser = await new User(req)
            await newUser.encryptPassword()

            newUser.save((err,result) => {
                if (err) {
                    return reject(err) 
                }
                return resolve(result)
            })
        })
    },

    signin: function(req){
        return new Promise((resolve,reject) => {

            User.find({'username': req.username}, async (err,result) => {
                
                if(err) reject(err)
                
                if(result.length==0){
                    return reject('username do not exist')
                } 
                
                if(!await (new User()).comparePassword(req,result[0])){
                    reject('wrong password')
                }
                
                console.log(result[0])

                let token = jwt.sign({user: result[0]}, process.env.SECRET_KEY)
                return resolve(token)
            })
        })
    }
}

module.exports = authService