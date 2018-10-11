var personModel = require("./../Models/Person")
var shortid = require("shortid");
var response = require('./../Libraries/ResponseLib');
var validate = require("./../Libraries/ValidateLib");
var encrypt = require('./../Libraries/encryptLib');
var nodemailer = require('nodemailer');
var token = require('./../Libraries/tokenLib')
var authModel = require('./../Models/authModel')

//Get ALL Users:

let getAllPersons = (req, res) => {
    personModel.find().lean().select('-_id -__v -password -hashPassword').exec((err, result) => {
        if (err) {
            let apiResponse = response.generate('true', "Unable To Get Details", 400, null)
            res.send(apiResponse)
        }
        else if (result == null || result == undefined || result == '') {
            let apiResponse = response.generate('true', "No users Found", 404, null)
            res.send(apiResponse)
        }
        else {
            let apiResponse = response.generate('false', "All Users Found", 200, result)
            res.send(apiResponse)
        }
    })
}

//Getting Single User:

let getSinglePerson = (req, res) => {
    personModel.findOne({ "userId": req.params.userId }).lean().
        select('-__v -_id -password -hashPassword').exec((err, result) => {
            if (err) {
                let apiResponse = response.generate('true', "Unable To Get Details", 400, null)
                res.send(apiResponse)
            }
            else if (result == null || result == undefined || result == '') {
                let apiResponse = response.generate('true', "User Not Found", 404, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate('false', "User Found", 200, result)
                res.send(apiResponse)
            }
        })
}

//Sign-UP Function :

let signupFunction = (req, res) => {
    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!validate.Email(req.body.email)) {
                    let apiResponse = response.generate("true", "Email Does Not Meet Requirement", 500, null)
                    reject(apiResponse);
                }
                else if (req.body.password == null || req.body.password == undefined || req.body.password == '') {
                    let apiResponse = response.generate("true", "Enter Your Password", 500, null)
                    reject(apiResponse);
                }
                else {
                    resolve(req);
                }
            }
            else {
                let apiResponse = response.generate("true", "Please Provide Your Email Address", 500, null)
                reject(apiResponse);
            }
        })
    }

    let createUser = () => {
        return new Promise((resolve, reject) => {
            personModel.findOne({ email: req.body.email }).exec((err, userDetails) => {
                console.log(userDetails)
                if (err) {
                    let apiResponse = response.generate("true", "Failed To Find Details", 500, null)
                    reject(apiResponse)
                }
                else if (userDetails === null || userDetails === undefined || userDetails === '') {

                    let newPerson = new personModel({
                        userId: shortid.generate(),
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email.toLowerCase(),
                        password: req.body.password,
                        contactNumber: req.body.contactNumber,
                        countryCode: req.body.countryCode,
                        hashPassword: encrypt.hashPassword(req.body.password),
                        admin: req.body.admin
                    })
                    newPerson.save((err, result) => {
                        console.log(result)
                        if (err) {

                            console.log(err)
                            let apiResponse = response.generate("true", "Error Occured While Saving Details", 500, null);
                            reject(apiResponse);
                        }
                        else {
                            let personObject = result.toObject()
                            let transporter = nodemailer.createTransport({
                                host: 'smtp.gmail.com',
                                port: 587,
                                auth: {
                                    user: 'edwisoralumni@gmail.com',
                                    pass: 'edwisor12'
                                },
                                secureConnection: 'false',
                                tls: {

                                    rejectUnauthorized: false
                                }
                            });//end of transporter
                            let mailOptions = {
                                from: '"admin" <edwisoralumni@gmail.com',
                                to: result.email,
                                subject: "Sign Up Successfull! Welcome to 'Meeting Planner'.Your Unique UserId is :" + newPerson.userId,
                                text: "Meeting Planner is meeting Scheduler App For Everyday Use.It is truly usable with great User Experience\
                                No Matter Where You Are What you do you will be better organised."
                            }
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    return console.log(error)
                                }
                                console.log('Message sent: %s', info.messageId);
                                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                            })
                            resolve(personObject);
                        }
                    })
                }
                else {
                    let apiResponse = response.generate("true", "User With Email Already Exists", 500, null)
                    reject(apiResponse)
                }

            })
        })

    }

    validateUserInput(req, res).then(createUser).then((resolve) => {
        delete resolve.password
        delete resolve.hashPassword
        let apiResponse = response.generate("false", "User Created", 200, resolve)
        res.send(apiResponse);
    }).catch((error) => {
        res.send(error)
    })
}

//Login Function:

let loginFunction = (req, res) => {

    let findUser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log("Email Is There")
                personModel.findOne({ email: req.body.email }, (err, personDetails) => {
                    if (err) {
                        let apiResponse = response.generate("true", 'Error Occured', 500, null);
                        reject(apiResponse)
                    }
                    else if (personDetails == null || personDetails == undefined || personDetails == '') {
                        let apiResponse = response.generate("true", "Person Details Not Found", 500, null)
                        reject(apiResponse)
                    }
                    else {
                        resolve(personDetails)
                    }

                })
            }
            else {
                let apiResponse = response.generate("true", "Email Is Missing", 500, null)
                reject(apiResponse)
            }
        })
    }
    let validatePassword = (personDetails) => {
        return new Promise((resolve, reject) => {
            encrypt.comparePassword(req.body.password, personDetails.hashPassword, (err, isMatch) => {
                if (err) {
                    let apiResponse = response.generate('true', "Password Error", 400, null)
                    reject(apiResponse);
                }
                else if (isMatch) {
                    let personDetailsObj = personDetails.toObject();
                    delete personDetailsObj.password;
                    delete personDetailsObj.hashPassword;
                    delete personDetailsObj._id;
                    delete personDetailsObj.__v;
                    resolve(personDetailsObj)
                }
                else {
                    let apiResponse = response.generate("true", "Wrong Password", "400", null)
                    reject(apiResponse)
                }
            })
        })
    }

    let generateToken = (personDetails) => {
        console.log("Generating Token");
        console.log(personDetails)
        return new Promise((resolve, reject) => {
            token.generateToken(personDetails, (err, tokenDetails) => {
                if (err) {
                    let apiResponse = response.generate("true", "Failed To Generate Token", 404, null)
                    reject(apiResponse)
                }
                else {
                    tokenDetails.userId = personDetails.userId;
                    tokenDetails.userDetails = personDetails
                    resolve(tokenDetails)
                }
            })
        })
    }
    let saveToken = (tokenDetails) => {
        console.log(tokenDetails);
        console.log("Saving Token..")
        return new Promise((resolve, reject) => {
            authModel.findOne({ "userId": tokenDetails.userId }, (err, retrievedDetails) => {
                if (err) {
                    let apiResponse = response.generate("true", "Error Occured", 400, null)
                    reject(apiResponse)
                }
                else if (retrievedDetails === null || retrievedDetails === undefined || retrievedDetails === "") {
                    console.log(retrievedDetails)
                    let newAuthToken = new authModel({
                        userId: tokenDetails.userId,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,
                        tokenGenerationTime: new Date()
                    })

                    newAuthToken.save((error, newTokenDetails) => {
                        if (err) {
                            let apiResponse = response.generate("true", "Error Occured", 400, null)
                            reject(apiResponse)
                        }
                        else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            console.log(responseBody)
                            resolve(responseBody)

                        }
                    })


                }
                else {
                    retrievedDetails.authToken = tokenDetails.token;
                    retrievedDetails.secretKey = tokenDetails.secretKey;
                    retrievedDetails.tokenGenerationTime = new Date()
                    retrievedDetails.save((err, newTokenDetails) => {
                        if (err) {
                            let apiResponse = response.generate("true", "Error Occured While Generating Token", 400, null)
                            res.send(apiResponse)
                        }
                        else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                            console.log(responseBody)
                        }
                       


                    }
                    )
                }
            })

        })
    }
    findUser(req, res).then(validatePassword).then(generateToken).then(saveToken).then((resolve) => {
        delete resolve.tokenSecret;
        let apiResponse = response.generate("false", "Login Successfull", 200, resolve);
        res.send(apiResponse)
    }).catch((err) => {
        console.log(err);
        res.send(err)
    })
}

//Forgot Password:

let forgotPassword = (req, res) => {
    if (req.body.email) {
        console.log(req.body.email)
        personModel.findOne({ email: req.body.email }, (err, result) => {
            if (err) {
                let apiResponse = response.generate("true", "Error Took Place", 400, null)
                res.send(apiResponse);
            }
            else if (result == null || result == undefined || result == '') {
                let apiResponse = response.generate("true", "Email Address Is Not Correct", 400, null)
                res.send(apiResponse)
            }
            else {
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secureConnection: 'false',
                    auth: {
                        user: "edwisoralumni@gmail.com",
                        pass: "edwisor12"
                    },
                    tls: {
                        rejectUnauthorized: false,
                    }
                })
                let mailOptions = {
                    from: "'admin <edwisoralumni@gmail.com'",
                    to: result.email,
                    subject: "Password Recovery Request",
                    text: "Hi! Your password is: " + result.password
                }
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error)
                        let apiResponse = response.generate("true", "Error Occured While Sending Email", 400, null)
                        res.send(apiResponse)
                    }
                    else {
                        console.log("Message sent : %s", info.messageId)
                        console.log("Preview URL:%s", nodemailer.getTestMessageUrl(info))
                        let apiResponse = response.generate("false", "Password Send To Your Email", 200, '')
                        res.send(apiResponse)
                    }
                })
            }
        })
    }
}

//Logout Functionality:

let logout=(req,res)=>{
authModel.findOneAndRemove({'userId':req.params.id},(err,result)=>{
    if(err){
        let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
        res.send(apiResponse)
    }
    else if(result==undefined||result==''||result==null){
        let apiResponse = response.generate(true, 'Already Logged Out or Invalid UserId', 404, null)
        res.send(apiResponse)
    }
    else{
        let apiResponse = response.generate(false, 'Logged Out Successfully', 200, null)
        res.send(apiResponse)
    }
})
}
module.exports = {
    signupFunction: signupFunction,
    loginFunction: loginFunction,
    forgotPassword: forgotPassword,
    getAllPersons: getAllPersons,
    getSinglePerson: getSinglePerson,
    logout:logout
}