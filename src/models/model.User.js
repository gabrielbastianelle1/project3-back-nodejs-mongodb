const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    }
},{
    versionKey: false,
    collection: 'User'
})


User.methods.encryptPassword = async function(){
    this.password = await bcrypt.hashSync(this.password,bcrypt.genSaltSync(10))
}

User.methods.comparePassword = async function(req,user){
    return await bcrypt.compareSync(req.password,user.password)
}

module.exports = mongoose.model('User',User)