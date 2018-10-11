const socketio = require('socket.io')
const meetingModel = require('./../Models/Meeting-Event')
const shortid = require('shortid')
const tokenLib = require('./tokenLib');
var moment = require('moment');
var nodemailer = require('nodemailer')
const userModel = require('./../Models/Person')


let setServer = (server) => {
    let io = socketio.listen(server)
    let myio = io.of('')

    //Verifying User :

    myio.on('connection', function (socket) {
        socket.emit('verify-user', "Provide AuthToken For Verification")
        socket.on('setuser', (authToken) => {
            tokenLib.verifyClaim(authToken, (err, userData) => {
                if (err) {
                    socket.emit('auth-error', 'Provide Correct Token')
                }
                else {
                    console.log('User Is Verified')
                    console.log(userData)

                }
            })
        })

        //Adding A New Event:

        socket.on('addEvent', (eventData) => {
            let id = shortid.generate();
            socket.id = eventData.personId
            let startDate = new Date(eventData.start)
            let endDate = new Date(eventData.end)
            let formatDate = moment(startDate).format('MM/DD/YYYY')
            let formatDate2 = moment(endDate).format('MM/DD/YYYY')

            let newMeeting = new meetingModel()
            newMeeting.id = id;
            newMeeting.personId = eventData.personId
            newMeeting.title = eventData.title;
            newMeeting.details = eventData.details;
            newMeeting.address = eventData.address;
            newMeeting.via = eventData.via;
            newMeeting.online = eventData.online;
            newMeeting.startTime = eventData.startTime;
            newMeeting.endTime = eventData.endTime;
            newMeeting.start = formatDate;
            newMeeting.end = formatDate2;
            newMeeting.save((err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(result)
                    console.log("In result", socket.id)
                    socket.broadcast.emit('addeventResponse', socket.id)
                    userModel.findOne({ 'userId': socket.id }, (err, userDetails) => {
                        if (err) {
                            console.log("Error Occured")
                        }
                        else if (userDetails == null || userDetails == undefined || userDetails == '') {
                            console.log("Result Is empty")
                        }
                        else {
                            console.log(userDetails)
                            let transporter = nodemailer.createTransport({
                                host: 'smtp.gmail.com',
                                port: 587,
                                secureConnection: false,
                                auth: {
                                    user: 'edwisoralumni@gmail.com',
                                    pass: 'edwisor12'
                                },
                                tls: {
                                    rejectUnauthorized: false
                                }
                            })
                            let mailOptions = {
                                from: " 'admin'",
                                to: userDetails.email,
                                subject: "New Meeting!!!",
                                text: 'Hi You Have a new Meeting! Login To Your Account and Please Check  Details About Your Meeting '

                            }
                            transporter.sendMail(mailOptions, (err, info) => {
                                if (err) {
                                    console.log("Error Occured")
                                    console.log(err)
                                }
                                console.log("Message Sent:%s", info.messageId)
                            })
                        }
                    })
                }
            })
        })

        //Deleting Event:

        socket.on('deleteEvent', (data) => {
            socket.id = data.id;

            meetingModel.remove({ 'id': data.eventId }, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else if (result == null || result == '' || result == undefined) {
                    console.log("Result Is Null")
                }
                else {
                    console.log("Socketid", socket.id)
                    socket.broadcast.emit('deleteResponse', socket.id)
                    userModel.findOne({ 'userId': socket.id }, (err, userDetails) => {
                        if (err) {
                            console.log("Error Occured")
                        }
                        else {

                            let transporter = nodemailer.createTransport({
                                host: 'smtp.gmail.com',
                                port: 587,
                                secureConnection: false,
                                auth: {
                                    user: 'edwisoralumni@gmail.com',
                                    pass: 'edwisor12'
                                },
                                tls: {
                                    rejectUnauthorized: false
                                }
                            });
                            let mailOptions = {
                                from: "'admin'",
                                to: userDetails.email,
                                subject: "Meeting Cancelled",
                                text: "Your scheduled Meeting Is Cancel!Login to ur account to see details"
                            }
                            transporter.sendMail(mailOptions, (err, info) => {
                                if (err) {
                                    console.log(err)
                                }
                                console.log("Mail Sent")
                                console.log("Message%url", info.messageId)
                            })

                        }

                    })

                }
            })
        })
    })

}

module.exports = {
    setServer: setServer
}