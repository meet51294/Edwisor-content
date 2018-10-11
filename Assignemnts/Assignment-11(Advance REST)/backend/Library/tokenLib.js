const jwt = require('jsonwebtoken')
const shortid=require('shortid')
const secretKey="HiddenSecretKey"

let generateToken= (data,cb)=>{
    try{
        let claims={
            jwtid:shortid.generate(),
            iat:Date.now(),
            exp:Math.floor(Date.now()/1000)+(60*60*24),
            sub:'authToken',
            iss:'edChat',
            data:data
        }
    let tokenDetails={
        token:jwt.sign(claims,secretKey),
        tokenSecret:secretKey

    }
    cb(null,tokenDetails)
}catch(err){
    cb(err,null)
}
} // End Generate Token
let verifyClaim = (token,cb)=>{
    jwt.verify(token,secretKey,function(err,decoded){
        if(err){
            console.log(err);
            cb(err,null)
        }
        else{
            console.log("User Veriied")
            console.log(decoded)
            cb(null,decoded)
        }
    })
}//end verify claim
let verifyClaimWithoutSecret=(token,cb)=>{
    jwt.verify(token,secretKey,function(err,decoded){
        if(err){
            console.log(err)
            cb(err,null)
        }else{
            console.log("User Verified")
            console.log(decoded)
            cb(null,decoded)
        }
});
}
module.exports = {
    generateToken:generateToken,
    verifyToken:verifyClaim,
    verifyClaimWithoutSecret:verifyClaimWithoutSecret
}