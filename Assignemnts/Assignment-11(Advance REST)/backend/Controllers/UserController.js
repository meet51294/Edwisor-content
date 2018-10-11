const mongoose = require('mongoose');
const shortid = require('shortid')
const UserModel = require('./../Models/User')
const response = require('./../Library/responseLib')
const validateInput = require('./../Library/paramsValid')
const token = require('./../Library/tokenLib')
const passwordLib = require('./../Library/generatePasswordLib');
const AuthModel = require('./../Models/Auth');
const time = require('./../Library/timeLib');
const nodemailer = require('nodemailer')
//Getting All Users Details
let getAll = (req, res) => {
    UserModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                let apiResponse = response.generate(true, "Failed To Find Users", 500, null)
                res.send(apiResponse)
            }
            else if (result == null || result == undefined) {
                let apiResponse = response.generate(true, "User Not Found", 404, null)
                res.send(apiResponse)

            }
            else {
                let apiResponse = response.generate(false, "All User Details Found", 200, result)
                res.send(apiResponse)

            }
        })
}
//get the details of a Single User
let getSingleUser = (req, res) => {
    UserModel.findOne({ 'userId': req.params.id })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                let apiResponse = response.generate(false, "User Not Found", 500, null)
                res.send(apiResponse)
            }
            else if (result == undefined || result == null) {
                let apiResponse = response.generate(false, "No UserDetails", 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate(false, "User Found", 200, result)
                res.send(apiResponse)
            }
        })

}
//Deleting User
let removeUser = (req, res) => {
    UserModel.findOneAndRemove({ 'userId': req.params.id })
        .exec((err, result) => {
            if (err) {
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            }
            else if (result == null || result == undefined) {
                let apiResponse = response.generate(true, 'User Found', 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate(true, 'User Removed', 200, result)
                res.send(apiResponse)
            }

        })
}

//Start Of SignUp Function
let signUpFunction = (req, res) => {
    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!validateInput.Email(req.body.email)) {
                    let apiResponse = response.generate(true, 'Email Does Not Meet The Requirement', 400, null)
                    reject(apiResponse)
                }
                else if (req.body.password == null || req.body.password == undefined) {
                    let apiResponse = response.generate(true, 'Password Field Is Empty', 400, null)
                    reject(apiResponse)
                }
                else {
                    resolve(req)
                }
            }
            else {
                let apiResponse = response.generate(true, 'One Or Parameter Is Missing', 400, null)
                reject(apiResponse)
            }
        })
    }//end Validate User Info
    let createUser = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: req.body.email })
                .exec((err, retrievedUserDetails) => {
                    if (err) {
                        let apiResponse = response.generate(true, 'Failed To Create User', 500, null)
                        reject(apiResponse)
                    }
                    else if (retrievedUserDetails === null || retrievedUserDetails === undefined) {
                        console.log(req.body)
                        let newUser = new UserModel({
                            userId: shortid.generate(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName || '',
                            email: req.body.email.toLowerCase(),
                            mobileNumber: req.body.mobileNumber,
                            password: passwordLib.hashpassword(req.body.password),
                        })
                        newUser.save((err, newUser) => {
                            if (err) {
                                let apiResponse = response.generate(true, 'Failed To Create User', 500, null)
                                reject(apiResponse)
                            }
                            else {
                                let newUserObj = newUser.toObject()
                                //Sending Nodemail
                                let transporter = nodemailer.createTransport({
                                    host: 'smtp.gmail.com',
                                    port: 587,
                                    secure: false,
                                    auth: {
                                        user: "skaku349@gmail.com",
                                        pass: "7015827942"
                                    },
                                    tls: {
                                        rejectUnauthorized: false
                                    }
                                });

                                let mailOptions = {
                                    from: '"Pulkit👻" <skaku349@example.com>',
                                    to: newUserObj.email,
                                    subject: 'WELCOME TO SOCKET CHAT!',
                                    text: 'YOUR Sign-Up Is Successful,You can Now Login To Connect With The World',
                                };
                                transporter.sendMail(mailOptions, (error, info) => {
                                    if (error) {
                                        return console.log(error);
                                    }
                                    console.log('Message sent: %s', info.messageId);
                                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                                });

                                resolve(newUserObj);
                            }
                        })
                    }
                    else {
                        let apiResponse = response.generate(true, 'User Already Present With This Email', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }//end Create User Function
    validateUserInput(req, res).
        then(createUser).then((resolve) => {
            delete resolve.password
            let apiResponse = response.generate(false, 'User Created', 200, resolve)
            res.send(apiResponse);
        }).catch((err) => {
            res.send(err);
        })
}// end user signup function 


// start of login function 
let loginFunction = (req, res) => {
    let findUser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log("Email Is There")
                console.log(req.body);
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    if (err) {
                        console.log(err);
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                    }
                    else if (userDetails === null || userDetails === undefined) {
                        console.log(userDetails)
                        let apiResponse = response.generate(true, 'No User Details Found', 404, null)
                        reject(apiResponse)
                    }
                    else {
                        resolve(userDetails)
                    }

                })
            }
            else {
                let apiResponse = response.generate(true, 'email parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let validatePassword = (retrievedUserDetails) => {
        return new Promise((resolve, reject) => {
            passwordLib.comparePassword(req.body.password, retrievedUserDetails.password, (err, isMatch) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Login Failed', 500, null)
                    reject(apiResponse)
                }
                else if (isMatch) {
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    resolve(retrievedUserDetailsObj)
                }
                else {
                    let apiResponse = response.generate(true, 'Wrong Password..Login Failed', 400, null)
                    reject(apiResponse)
                }
            })
        })
    }

    let generateToken = (userDetails) => {
        console.log("Generating Token")
        return new Promise((resolve, reject) => {
            token.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails)
                }
            })
        })
    }
    let saveToken = (tokenDetails) => {
        console.log("Saving Token")
        return new Promise((resolve, reject) => {
            AuthModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
                if (err) {
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                }
                else if (retrievedTokenDetails == undefined || retrievedTokenDetails == null) {
                    let newAuthToken = new AuthModel({
                        userId: tokenDetails.userid,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,
                        tokenGenerationTime: time.now()
                    })
                    newAuthToken.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                        }
                        else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }

                    })
                } else {
                    retrievedTokenDetails.authToken = tokenDetails.token
                    retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    retrievedTokenDetails.tokenGenerationTime = time.now()
                    retrievedTokenDetails.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                }
            })
        })
    }

    findUser(req, res).then(validatePassword).then(generateToken).then(saveToken).then((resolve) => {
        let apiResponse = response.generate(false, 'Login Successful', 200, resolve)
        res.send(apiResponse)
    }).catch((err) => {
        console.log(err)
        res.status(err.status)
        res.send(err)
    })

}



// end of the login function 


module.exports = {
    getAll: getAll,
    getSingleUser: getSingleUser,
    removeUser: removeUser,
    signUpFunction: signUpFunction,
    loginFunction: loginFunction
}