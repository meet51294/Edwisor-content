var userController = require('./../Controllers/UserManagement');
var config = require('./../App-Configuration/appConfig');
var meetingController = require('./../Controllers/MeetingManagement');
let setRouters = (app) => {
    let baseUrl = config.apiVersion;

    app.post(`${baseUrl}/user/signup`, userController.signupFunction);
    /**
     * @apiGroup User-Management
     * @apiVersion 0.0.1
     * @api {post} api/v1/user/signup  api for user SIGN-UP
     * @apiParam {string} firstName (body params)
     * @apiParam {string} lastName (body params)
     * @apiParam {string} email (body params)
     * @apiParam {string} password (body params)
     * @apiParam {string} contactNumber (body params)
     * @apiParam {string} countryCode (body params)
     * @apiParam {boolean} admin (body params)
     * 
     * @apiSuccess{object} response show error status,message,http status code,result
     * @apiSuccessExample {json} Success-Response:
       {
       "error":false,
       "message":"User-Created",
       "status" :200,
        "data":{
                "contactNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Schulman",
                "firstName": "Alan",
                "userId": "-E9zxTYA8",
                "admin" :true,
                "countryCode":"+91"        
            }
        }
      }

       @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To SignUP",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/user/login`, userController.loginFunction);
    /**
     * @apiGroup User-Management
     * @apiVersion 0.0.1
     * @api {post} api/v1/user/login  api for user LOGIN
     * @apiParam {string} email(body params)
     * @apiParam {string} password(body params)
     * @apiSuccess{object} response show error status,message,http status code,result
     *  @apiSuccessExample {json} Success-Response:
       {
       "error":false,
       "message":"Login SuccessFull",
       "status" :200,
        "data":{
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "contactNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Schulman",
                "firstName": "Alan",
                "userId": "-E9zxTYA8",
                "admin" :true,
                "countryCode":"+91"
                 
            }
        }
      }
       @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Login Failed",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/user/forgot`, userController.forgotPassword);
    /**
     * @apiGroup User-Management
     * @apiVersion 0.0.1
     * @api {post} api/v1/user/forgot  api to retrieve Password
     * @apiParam {string} email (body params)
     * @apiSuccess{object} response show error status,message,http status code,result
     *  @apiSuccessExample {json} Success-Response:
	 *
	 * {
	    "error": false,
	    "message": "Password Sent To Your Email",
	    "status": 200,
	    "data": ''
       }
     * @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Check Email Address",
	    "status": 500,
	    "data": null
	   }
	 */

    app.delete(`${baseUrl}/user/logout/:id`, userController.logout)
    /**
     * @apiGroup User-Management
     * @apiVersion 0.0.1
     * @api {delete} api/v1/user/logout/:id_of_user api to Logout
     * @apiParam {string} userId (url params)
     *  @apiSuccess{object} response show error status,message,http status code,result
     *  @apiSuccessExample {json} Success-Response:
	 *
	 * {
	    "error": false,
	    "message": "User SuccessFully Logout",
	    "status": 200,
	    "data": ''
       }
     * @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
     * 
     * 
     */

    app.get(`${baseUrl}/user/getAll`, userController.getAllPersons);
    /**
    * @apiGroup Users
    * @apiVersion 0.0.1
    * @api {get} api/v1/user/getAll  api to get All Users
    * @apiSuccess{object} response show error status,message,http status code,result
    *  @apiSuccessExample {json} Success-Response:
      {
      "error":false,
      "message":"Users Found",
      "status" :200,
       "data":[
           {
       
               "contactNumber": 2234435524,
               "email": "someone@mail.com",
               "lastName": "Schulman",
               "firstName": "Alan",
               "userId": "-E9zxTYA8",
               "admin" :true,
               "countryCode":"+91"
                    
       }
   ]
     }
      @apiErrorExample {json} Error-Response:
    *
    * {
       "error": true,
       "message": "Users Not Found",
       "status": 400,
       "data": null
      }
    */
    app.get(`${baseUrl}/user/getSingle/:userId`, userController.getSinglePerson)
    /**
    * @apiGroup Users
    * @apiVersion 0.0.1
    * @api {get} api/v1/user/getAll  api to get Single User
    * @apiParam {string} userId (url params)
    * @apiSuccess{object} response show error status,message,http status code,result
    *  @apiSuccessExample {json} Success-Response:
      {
      "error":false,
      "message":"User Found",
      "status" :200,
       "data":
           {
               "contactNumber": 2234435524,
               "email": "someone@mail.com",
               "lastName": "Schulman",
               "firstName": "Alan",
               "userId": "-E9zxTYA8",
               "admin" :true,
               "countryCode":"+91"
                    
       }
     }
      @apiErrorExample {json} Error-Response:
    *
    * {
       "error": true,
       "message": "User Not Found",
       "status": 400,
       "data": null
      }
    */


    app.get(`${baseUrl}/meeting/getAll/:id`, meetingController.getAllMeetings);
    /**
     * @apiGroup Meetings
     * @apiVersion 0.0.1
     * @api {get} api/v1/meeting/getAll  api to get All Meetings Of a Specific User
     * @apiParam {string} userId (url params)
     * @apiSuccess{object} response show error status,message,http status code,result
     *  @apiSuccessExample {json} Success-Response:
       {
       "error":false,
       "message":"Meeting Details Found",
       "status" :200,
        "data":[
            {
                personId:"-E9zxTYA8",
                id:"-E9zxTREW",
                "title":"Example Meeting",
                "details":"Example Details",
                "start":"07/03/2018",
                "end":"07/03/2018"
                "startTime":"10:30AM",
                "endTime":"11:30AM",
                "online":"false",
                "address":"Sample Address",
            }]
      }
       @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No Meeting Found",
	    "status": 400,
	    "data": null
	   }
	 */


    app.get(`${baseUrl}/meeting/getSingle/:meetingId`, meetingController.getSingleEvent)
    /**
     * @apiGroup Meetings
     * @apiVersion 0.0.1
     * @api {get} api/v1/meeting/getSingle/meeting_id api to get  Specific Meeting
     * @apiParam {string} unique meeting ID.(url params)
     * @apiSuccess{object} response show error status,message,http status code,result
     *  @apiSuccessExample {json} Success-Response:
       {
       "error":false,
       "message":"Meeting  Found",
       "status" :200,
        "data":
            {
                personId:"-E9zxTYA8",
                id:"-E9zxTREW",
                "title":"Example Meeting",
                "details":"Example Details",
                "start":"07/03/2018",
                "end":"07/03/2018"
                "startTime":"10:30AM",
                "endTime":"11:30AM",
                "online":"false",
                "address":"Sample Address",
            }
      }
       @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No Meeting Found",
	    "status": 400,
	    "data": null
	   }
	 */
    app.put(`${baseUrl}/meeting/edit/:id`, meetingController.editEvent)
}

module.exports = {
    setRouters: setRouters
}