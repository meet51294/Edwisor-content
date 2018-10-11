const config = require("./../App-Configuration/Configuration");
const controller = require("./../Controllers/User-Management");
const control = require("./../Controllers/Task-Controller");
let setRouters = (app) => {
    let baseURL = config.apiVersion;


    //User-Management:

    app.post(`${baseURL}/login`, controller.loginFunction);
    /**
	 * @api {post} /api/v1.0/login Login Function
	 * @apiVersion 0.0.1
	 * @apiGroup User-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Login Successfull",
	    "status": 200,
	    "data": [
            {
    
    email:String
    textPassword:String,
    password:String,
    firstName:String,
    lastName:String,
    
            }
        ]
    }
}
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error":true ,
	    "message": "No User Details Found",
	    "status": 400,
	    "data": null
	   }
	 */

    app.post(`${baseURL}/signup`, controller.signupFunction);
    /**
	 * @api {post} /api/v1.0/signup Sign-Up Function
	 * @apiVersion 0.0.1
	 * @apiGroup User-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "User-Created",
	    "status": 200,
	    "data": [
            {
        userId:String
        email:String
        textPassword:String,
        password:String,
        firstName:String,
        lastName:String,
        mobileNumber : String,
        countryCode:String,
            
            }
        ]
    }
}
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To SignUp",
	    "status": 400,
	    "data": null
	   }
	 */

    app.post(`${baseURL}/restore`, controller.forgotPasswordFunction);
    /**
    * @api {post} /api/v1.0/restore ForgotPassword
    * @apiVersion 0.0.1
    * @apiGroup User-Management
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
       "error": false,
       "message": "Password Send TO mail",
       "status": 200,
       "data": null
   }
}
}
     @apiErrorExample {json} Error-Response:
    *
    * {
       "error":true ,
       "message": "Error Occured",
       "status": 400,
       "data": null
      }
    */

    app.get(`${baseURL}/all`, controller.getallusers);
    /**
	 * @api {post} /api/v1.0/all Get All Users
	 * @apiVersion 0.0.1
	 * @apiGroup User-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Users Found",
	    "status": 200,
	    "data": [
            {
        userId:String
        email:String
        password:String,
        firstName:String,
        lastName:String,
        mobileNumber : String,
        countryCode:String,
            
            }
        ]
    }
}
}
*/
    app.delete(`${baseURL}/deleteuser/:id`, controller.removeAccount);
    /**
    * @api {delete} /api/v1.0/deleteuser/:id
    * @apiVersion 0.0.1
    * @apiGroup User-Management
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
       "error": false
       "message": "Account Deleted",
       "status": 200,
       "data": null
   }
}
}
     @apiErrorExample {json} Error-Response:
    *
    * {
       "error":true ,
       "message": "Account Deleted",
       "status": 400,
       "data": null
      }
    */

    //Lists:

    app.post(`${baseURL}/create`, control.createToDo);
    /**
	 * @api {post} /api/v1.0/create Create List
	 * @apiVersion 0.0.1
	 * @apiGroup List-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "List-Deleted",
	    "status": 200,
	    "data": [
            {
         id:String,
         name:String,
         description:String,
         group:Boolean,
        created By:String
            
            }
        ]
    }
}
}
@apiErrorExample {json} Error-Response:
*
* {
   "error":true ,
   "message": "Unable To Create List",
   "status": 400,
   "data": null
  }
*/

    app.delete(`${baseURL}/delete/:id`, control.deleteToDo);
    /**
	 * @api {delete} /api/v1.0/delete Delete List
	 * @apiVersion 0.0.1
	 * @apiGroup List-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "List-Deleted",
	    "status": 200,
	    "data": [
            {
         id:String,
         name:String,
         description:String,
         group:Boolean,
        created By:String
            
            }
        ]
    }
}
}
@apiErrorExample {json} Error-Response:
*
* {
   "error":true ,
   "message": "List Not Deleted",
   "status": 400,
   "data": null
  }
*/
    app.get(`${baseURL}/single/:id`, control.singletoDo);
    /**
	 * @api {get} /api/v1.0/single  Get Single List
	 * @apiVersion 0.0.1
	 * @apiGroup List-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "List-Created",
	    "status": 200,
	    "data": [
            {
         id:String,
         name:String,
         description:String,
         group:Boolean,
        created By:String
            
            }
        ]
    }
}
}
@apiErrorExample {json} Error-Response:
*
* {
   "error":true ,
   "message": "List Not Found",
   "status": 400,
   "data": null
  }
*/
    app.get(`${baseURL}/alltodo`, control.alltoDo);
/**
	 * @api {get} /api/v1.0/alltodo Getting ALl Lists
	 * @apiVersion 0.0.1
	 * @apiGroup List-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Lists Found",
	    "status": 200,
	    "data": [
            {
         id:String,
         name:String,
         description:String,
         group:Boolean,
        created By:String
            
            }
        ]
    }
}
}
@apiErrorExample {json} Error-Response:
*
* {
   "error":true ,
   "message": "Unable To Find Lists",
   "status": 400,
   "data": null
  }
*/
    //Tasks:

    app.post(`${baseURL}/createtask`, control.createTask);
    /**
	 * @api {post} /api/v1.0/createtask Create Tasks
	 * @apiVersion 0.0.1
	 * @apiGroup Task-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Task-Created",
	    "status": 200,
	    "data": [
            {
         listid:String,
         taskName:String,
         taskid:String
            
            }
        ]
    }
}
}
@apiErrorExample {json} Error-Response:
*
* {
   "error":true ,
   "message": "Unable to create task",
   "status": 400,
   "data": null
  }
*/
    app.get(`${baseURL}/alltask`, control.alltasks);
       /**
	 * @api {get} /api/v1.0/alltask Get All Tasks
	 * @apiVersion 0.0.1
	 * @apiGroup Task-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Tasks Found",
	    "status": 200,
	    "data": [
            {
         listid:String,
         taskName:String,
         taskid:String
            
            }
        ]
    }
}
}
@apiErrorExample {json} Error-Response:
*
* {
   "error":true ,
   "message": "Unable to find tasks",
   "status": 400,
   "data": null
  }
*/

    app.delete(`${baseURL}/deletetask/:id`, control.deleteSingletask);

       /**
	 * @api {delete} /api/v1.0/deletetask Create Tasks
	 * @apiVersion 0.0.1
	 * @apiGroup Task-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Task-Deleted",
	    "status": 200,
	    "data": [
            {
         listid:String,
         taskName:String,
         taskid:String
            
            }
        ]
    }
}
}
@apiErrorExample {json} Error-Response:
*
* {
   "error":true ,
   "message": "Unable TO Delete task",
   "status": 400,
   "data": null
  }
*/
    app.delete(`${baseURL}/deletemany/:id`, control.deletetasks);
       /**
	 * @api {post} /api/v1.0/deletemany Create Tasks
	 * @apiVersion 0.0.1
	 * @apiGroup Task-Management
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Tasks Deleted",
	    "status": 200,
	    "data": [
            {
         listid:String,
         taskName:String,
         taskid:String
            
            }
        ]
    }
}
}
@apiErrorExample {json} Error-Response:
*
* {
   "error":true ,
   "message": "Unable to delete tasks",
   "status": 400,
   "data": null
  }
*/
}
module.exports = {
    setRouters: setRouters
}
