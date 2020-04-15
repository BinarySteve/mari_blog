const User = require('../models/user');

//Read user information to gain profile information
exports.read = (req, res)=>{
    req.profile.hashed_password = undefined
    return res.json(req.profile)

}
