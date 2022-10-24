let isAdmin = {
    isAdmin: function (req,res,next){
        console.log(req.user.user)
        if(req.user.user.role != 'admin'){
            res.send('nao é admin')
        }
        next()
    }
}

module.exports = isAdmin