var jwt = require('jsonwebtoken')
var shortid = require('shortid');
const secretkey = "MeetingKey";

//Generating Token:

let generateToken = (data, cb) => {
    try {
        let claims = {
            jwtid: shortid.generate(),
            iat: Date.now(),
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
            sub: 'authToken',
            iss: 'meetingPlanner',
            data: data
        }

        let tokenDetails = {
            token: jwt.sign(claims, secretkey),
            tokenSecret: secretkey
        }
        cb(null, tokenDetails);
    } catch (err) {
        cb(err, null);
    }
}

//Verify Claims:

let verifyClaim = (token, cb) => {
    jwt.verify(token, secretkey, function (err, decoded) {
        if (err) {
            console.log(err)
            cb(err, null)
        }
        else {
            console.log("USER IS VERIFIED!")
            cb(null, decoded)
        }
    })
}

module.exports = {
    generateToken: generateToken,
    verifyClaim: verifyClaim
}