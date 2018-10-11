const bcrypt = require('bcryptjs')
const saltRounds = 10;

//Encrypting Password:

let hashPassword = (originalPassword) => {
    let salt = bcrypt.genSaltSync(saltRounds)
    let hash = bcrypt.hashSync(originalPassword, saltRounds)
    return hash;
}

//Comparing Password:

let comparePassword = (originalPassword, hashPassword, cb) => {
    bcrypt.compare(originalPassword, hashPassword, (err, result) => {
        if (err) {
            cb(err, null)
        }
        else {
            cb(null, result)
        }
    })
}

module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword
}

