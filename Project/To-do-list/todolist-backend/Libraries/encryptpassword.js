const bcrypt = require("bcryptjs");
const saltRounds = 10;

let hashPassword = (originalTextPassword)=>{
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(originalTextPassword,saltRounds);
    return hash;
}
let comparePassword = (oldPassword,hashPassword,cb)=>{
    bcrypt.compare(oldPassword,hashPassword,(err,res)=>{
        if(err){
            cb(err,null)
        }
        else{
            cb(null,res)
        }
    })
}
module.exports = {
    hashPassword:hashPassword,
    comparePassword:comparePassword
}

