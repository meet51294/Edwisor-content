const encrypt = require("./../Libraries/encryptpassword");
const token = require("./../Libraries/token");
const valid = require("./../Libraries/Validate");
const response = require("./../Libraries/Response");
const UserModel = require("./../Models/User");
const nodemailer = require("nodemailer");
var shortid = require('shortid');

//Get All Users
let getallusers=(req,res)=>{
UserModel.find().select('-__v -_id -password -textPassword').lean().
    exec((error,result)=>{
        if(error){
            let apiResponse = response.generate("false","Unable To Get User Details",400,null)
            res.send(apiResponse);
        }
        else if(result==undefined||result==null||result==""){
            let apiResponse = response.generate("false","No Users Found",400,null);
            res.send(apiResponse);
        }
        else{
            let apiResponse=response.generate(true,"User Details Found",200,result)
            res.send(apiResponse);
        }
    })
}
// Remove A User Account:

let removeAccount=(req,res)=>{
    UserModel.findOneAndRemove({ userId:req.params.id},(err,result)=>{
        console.log(result)
        if(err){
            let apiResponse=response.generate("true","User Not Deleted",400,null);
            res.send(apiResponse)
        }
        else if(result==null||result==undefined||result==""){
          let apiResponse=response.generate("true","UserId not correct",400,null)
          res.send(apiResponse)
        }
        else{
            let apiResponse=response.generate("false","Account Deleted",200,result);
            res.send(apiResponse)
        }

    })
}


//Sign-UP Function:

let signupFunction = (req, res) => {
    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!valid.Email(req.body.email)) {
                    let apiResponse = response.generate("true", "Email Does Not Meet Requirement", 400, null);
                    reject(apiResponse);
                }
                else if (req.body.textPassword == null || req.body.textPassword == undefined) {
                    let apiResponse = response.generate("true", "Password Not Found", 400, null);
                    reject(apiResponse);
                }
                else {
                    resolve(req);
                }
            }
            else {
                let apiResponse = response.generate("true", "One Or More Parameter is Missing", 400, null);
                reject(apiResponse);
            }
        })
    } // End Validate  User Input;

    let createUser = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: req.body.email }).exec((err, userDetails) => {
                if (err) {
                    let apiResponse = response.generate("true", "Failed To Create User", 500, null);
                    reject(apiResponse);
                }
                else if (userDetails == null || userDetails == undefined) {
                    console.log(req.body);
                    let newUser = new UserModel({
                        userId: shortid.generate(),
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email.toLowerCase(),
                        countryCode: req.body.countryCode,
                        mobileNumber: req.body.mobileNumber,
                        textPassword: req.body.textPassword,
                        password: encrypt.hashPassword(req.body.textPassword)
                    })
                    newUser.save((err, newUser) => {
                        if (err) {
                            let apiResponse = response.generate("true", "Failed To Create A User", 400, null)
                            reject(apiResponse);
                        }
                        else {
                            let newUserObj = newUser.toObject();
                            let transporter = nodemailer.createTransport({
                                host: "smtp.gmail.com",
                                port: 587,
                                secureConnection: "false",
                                auth: {
                                    user: "edwisoralumni@gmail.com",
                                    pass: "edwisor12"
                                },
                                tls: {
                                    ciphers: 'SSLv3',
                                    rejectUnauthorized: false,
                                }
                            });
                            let mailOptions = {
                                from: '"admin" <edwisoralumni@gmail.com>',
                                to: newUser.email,
                                subject: "Sign-Up Successful!Welcome To 'WorkFow:To-Do-List' App! Your UserId is: "+ newUser.userId,
                                text: "Work Flow is smart Task List For Everyday Use.It is truly usable with great User Experience No Matter Where You Are What you do you will be better organised!."
                            };
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    return console.log(error)
                                }

                                console.log('Message sent: %s', info.messageId);
                                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                            });
                            resolve(newUserObj);
                        }
                    })
                }
                else {
                    let apiResponse = response.generate("true", "User With Same Email Already Exists", 400, null)
                    reject(apiResponse);
                }
            })
        })
    }//End Create-User Function


    validateUserInput(req, res).then(createUser).then((resolve) => {
        delete resolve.password;
        delete resolve.textPassword;
        let apiResponse = response.generate(false, 'User Created', 200, resolve);
        res.send(apiResponse);
    }).catch((err) => {
        res.send(err);
    });
}//end user signup function

//Log-In Function:

let loginFunction = (req, res) => {
    let findUser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log("Email is there");
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    if (err) {
                        let apiResponse = generate("True", "Failed To Find UserDetails", 500, null);
                        reject(apiResponse);
                    }
                    else if (userDetails == null || userDetails == undefined) {
                        console.log(userDetails);
                        let apiResponse = response.generate("True", "No User Details Found", 400, null);
                        reject(apiResponse);
                    }
                    else {
                        resolve(userDetails);
                    }
                })
            }
            else {
                let apiResponse = response.generate("True", "Email Parameter Is Missing", 400, null);
                reject(apiResponse);
            }
        })
    }
    let validatePassword = (userDetails) => {
        return new Promise((resolve, reject) => {
            encrypt.comparePassword(req.body.textPassword, userDetails.password, (err, isMatch) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate("True", "Login Failed", 400, null);
                }
                else if (isMatch) {
                    let userDetailsObj = userDetails.toObject();
                    delete userDetailsObj.password;
                    delete userDetailsObj.textPassword;
                    delete userDetailsObj._id;
                    delete userDetailsObj.__v;
                    resolve(userDetailsObj);
                }
                else {
                    let apiResponse = response.generate("True", "Wrong Password..Login Failed", 400, null);
                    reject(apiResponse);
                }
            })
        })
    }
    let generateToken = (userDetails) => {
        console.log("Generating Token");
        console.log(userDetails)
        return new Promise((resolve, reject) => {
            token.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    let apiResponse = response.generate("True", "Failed To Generate Token", 500, null);
                    reject(apiResponse);
                }
                else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails);
                }
            })
        })
    }
    findUser(req, res).then(validatePassword).then(generateToken).then((resolve) => {
        delete resolve.tokenSecret;
        let apiResponse = response.generate("False", "Login Successfull", 200, resolve)
        res.send(apiResponse);
    }).catch((err) => {
        console.log(err);
        res.status(err.status);
        res.send(err);
    })
};//end Login-Function

let forgotPasswordFunction = (req, res) => {

    if (req.body.email) {
        UserModel.findOne({ "email": req.body.email }, (err, userData) => {
            if (err) {
                let apiResponse = response.generate("true", "Error Occured", 400, null)
                res.send(apiResponse)
            }
            else if (userData == null || userData == undefined || userData == "") {
                let apiResponse = response.generate("true", "Email Not Found", 400, null)
                res.send(apiResponse)
            }
            else {
                console.log(userData);
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secureConnection: "false",
                    auth: { user: "edwisoralumni@gmail.com", pass: "edwisor12" },
                    tls:
                        {
                            ciphers: 'SSLv3',
                            rejectUnauthorized: false
                        }
                });
                let mailOptions = {
                    from: '"app-support" <edwisoralumni@gmail.com',
                    to: userData.email,
                    subject: "Password Recovery",
                    text: "You have requested Your Password..Your Password For Login is: " + userData.textPassword
                }
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    }

                    console.log('Message sent: %s', info.messageId);
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    let apiResponse = response.generate("false", "Message Sent", 200, null)
                    res.send(apiResponse);
                });
            }
        })

    }
}



module.exports = {
    signupFunction: signupFunction,
    loginFunction: loginFunction,
    forgotPasswordFunction: forgotPasswordFunction,
    getallusers:getallusers,
    removeAccount:removeAccount
}