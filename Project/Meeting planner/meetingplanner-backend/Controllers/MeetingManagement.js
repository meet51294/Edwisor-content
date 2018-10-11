const shortid = require('shortid')
const response = require('./../Libraries/ResponseLib');
const meetingModel = require('./../Models/Meeting-Event');
const nodemailer = require('nodemailer')
const moment = require('moment')
const personModel = require("./../Models/Person")

//Getting All Meetings:

let getAllMeetings = (req, res) => {
    meetingModel.find({ 'personId': req.params.id }).lean().select('-_id -__v').exec((err, result) => {
        if (err) {
            let apiResponse = response.generate("true", "Unable to Find Meeting Details", 404, null)
            res.send(apiResponse)
        }
        else if (result == null || result == undefined || result == '') {
            let apiResponse = response.generate("true", "No Meeting Found", 500, null)
            res.send(apiResponse)
        }
        else {
            let apiResponse = response.generate("false", "Meeting List Found", 200, result);
            res.send(apiResponse)
        }
    })
}

//Getting Single Event:

let getSingleEvent = (req, res) => {
    meetingModel.findOne({ 'id': req.params.meetingId }).lean().select('-_id -__v')
        .exec((err, result) => {
            if (err) {
                let apiResponse = response.generate("true", "Unable to Find Meeting Details", 404, null)
                res.send(apiResponse)
            }
            else if (result == null || result == undefined || result == '') {
                let apiResponse = response.generate("true", "No Meeting Found", 500, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate("false", "Meeting  Found", 200, result);
                res.send(apiResponse)
            }
        })
}

//Editing Event:

let editEvent = (req, res) => {
    let blogDetails = req.body
    let tempId = req.body.personId
    meetingModel.update({ 'id': req.params.id }, blogDetails, { multi: true }, (err, details) => {
        if (err) {
            let apiResponse = response.generate("true", "Error Occured", 400, null);
            res.send(apiResponse)
        }
        else {

            personModel.findOne({ 'userId': tempId }, (err, userDetail) => {
                if (err) {

                    let apiResponse = response.generate("true", "Error Occured", 400, null);
                    res.send(apiResponse)
                }
                else if (userDetail == null || userDetail == undefined || userDetail == '') {

                    let apiResponse = response.generate("true", "Not Found", 404, null);
                    res.send(apiResponse)
                }
                else {
                    console.log(userDetail)

                    let transporter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 587,
                        secureConnection: false,
                        auth: {
                            user: 'edwisoralumni@gmail.com',
                            pass: 'edwisor12'
                        }
                    })
                    let mailOptions = {
                        from: "'admin'<edwisoralumni@gmail.com'",
                        to: userDetail.email,
                        subject: "Meeting Rescheduled",
                        text: "Hi!Your Meeting details are changed Please Login To Your Account For Further Details"
                    }
                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.log("Error Occured")
                            console.log(err);
                        }
                        else {
                            console.log("Mail Sent")
                            console.log("Message Sent:%s", info.messageId)
                            let apiResponse = response.generate("false", "Meeting Rescheduled", 200, details);
                            res.send(apiResponse)
                        }
                       
                    })


                }
            })

        }
    })
}
module.exports = {
    getAllMeetings: getAllMeetings,
    getSingleEvent: getSingleEvent,
    editEvent: editEvent
}