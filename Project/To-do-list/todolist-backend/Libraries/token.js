const jwt = require("jsonwebtoken");
const shortid=require("shortid");
const secretkey="ToDoListKey";
let generateToken = (data,cb)=>{
    try{
        let claims = {
            jwtid:shortid.generate(),
            iat:Date.now(),
            exp:Math.floor(Date.now()/1000)+(60*60*24),
            sub:'authToken',
            iss:'todolist',
            data:data
        }
        let tokenDetails = {
            token:jwt.sign(claims,secretkey),
            tokenSecret:secretkey
        }
        cb(null,tokenDetails)
    }catch(err){
        cb(err,null)
    }
}//End Generate Token
let verifyClaimWithoutSecret=(token,cb)=>{
    jwt.verify(token,secretkey,function(err,decoded){
        if(err){
            console.log(err)
            cb(err,null)
        }
        else{
            console.log("User Is Verified")
            console.log(decoded);
            cb(null,decoded)
        }
    })
}

module.exports={
    generateToken:generateToken,
    verifyClaimWithoutSecret:verifyClaimWithoutSecret
}