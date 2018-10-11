define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1.0/delete",
    "title": "Delete List",
    "version": "0.0.1",
    "group": "List_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"List-Deleted\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         id:String,\n         name:String,\n         description:String,\n         group:Boolean,\n        created By:String\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\":true ,\n   \"message\": \"List Not Deleted\",\n   \"status\": 400,\n   \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "List_Management",
    "name": "DeleteApiV10Delete"
  },
  {
    "type": "get",
    "url": "/api/v1.0/alltodo",
    "title": "Getting ALl Lists",
    "version": "0.0.1",
    "group": "List_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Lists Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         id:String,\n         name:String,\n         description:String,\n         group:Boolean,\n        created By:String\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\":true ,\n   \"message\": \"Unable To Find Lists\",\n   \"status\": 400,\n   \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "List_Management",
    "name": "GetApiV10Alltodo"
  },
  {
    "type": "get",
    "url": "/api/v1.0/single",
    "title": "Get Single List",
    "version": "0.0.1",
    "group": "List_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"List-Created\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         id:String,\n         name:String,\n         description:String,\n         group:Boolean,\n        created By:String\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\":true ,\n   \"message\": \"List Not Found\",\n   \"status\": 400,\n   \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "List_Management",
    "name": "GetApiV10Single"
  },
  {
    "type": "post",
    "url": "/api/v1.0/create",
    "title": "Create List",
    "version": "0.0.1",
    "group": "List_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"List-Deleted\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         id:String,\n         name:String,\n         description:String,\n         group:Boolean,\n        created By:String\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\":true ,\n   \"message\": \"Unable To Create List\",\n   \"status\": 400,\n   \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "List_Management",
    "name": "PostApiV10Create"
  },
  {
    "type": "delete",
    "url": "/api/v1.0/deletetask",
    "title": "Create Tasks",
    "version": "0.0.1",
    "group": "Task_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Task-Deleted\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         listid:String,\n         taskName:String,\n         taskid:String\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\":true ,\n   \"message\": \"Unable TO Delete task\",\n   \"status\": 400,\n   \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "Task_Management",
    "name": "DeleteApiV10Deletetask"
  },
  {
    "type": "get",
    "url": "/api/v1.0/alltask",
    "title": "Get All Tasks",
    "version": "0.0.1",
    "group": "Task_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Tasks Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         listid:String,\n         taskName:String,\n         taskid:String\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\":true ,\n   \"message\": \"Unable to find tasks\",\n   \"status\": 400,\n   \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "Task_Management",
    "name": "GetApiV10Alltask"
  },
  {
    "type": "post",
    "url": "/api/v1.0/createtask",
    "title": "Create Tasks",
    "version": "0.0.1",
    "group": "Task_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Task-Created\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         listid:String,\n         taskName:String,\n         taskid:String\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\":true ,\n   \"message\": \"Unable to create task\",\n   \"status\": 400,\n   \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "Task_Management",
    "name": "PostApiV10Createtask"
  },
  {
    "type": "post",
    "url": "/api/v1.0/deletemany",
    "title": "Create Tasks",
    "version": "0.0.1",
    "group": "Task_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Tasks Deleted\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         listid:String,\n         taskName:String,\n         taskid:String\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\":true ,\n   \"message\": \"Unable to delete tasks\",\n   \"status\": 400,\n   \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "Task_Management",
    "name": "PostApiV10Deletemany"
  },
  {
    "type": "delete",
    "url": "/api/v1.0/deleteuser/:id",
    "title": "",
    "version": "0.0.1",
    "group": "User_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n       \"error\": false\n       \"message\": \"Account Deleted\",\n       \"status\": 200,\n       \"data\": null\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\":true ,\n       \"message\": \"Account Deleted\",\n       \"status\": 400,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "User_Management",
    "name": "DeleteApiV10DeleteuserId"
  },
  {
    "type": "post",
    "url": "/api/v1.0/all",
    "title": "Get All Users",
    "version": "0.0.1",
    "group": "User_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Users Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n        userId:String\n        email:String\n        password:String,\n        firstName:String,\n        lastName:String,\n        mobileNumber : String,\n        countryCode:String,\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "User_Management",
    "name": "PostApiV10All"
  },
  {
    "type": "post",
    "url": "/api/v1.0/login",
    "title": "Login Function",
    "version": "0.0.1",
    "group": "User_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Login Successfull\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n    \n    email:String\n    textPassword:String,\n    password:String,\n    firstName:String,\n    lastName:String,\n    \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\":true ,\n\t    \"message\": \"No User Details Found\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "User_Management",
    "name": "PostApiV10Login"
  },
  {
    "type": "post",
    "url": "/api/v1.0/restore",
    "title": "ForgotPassword",
    "version": "0.0.1",
    "group": "User_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n       \"error\": false,\n       \"message\": \"Password Send TO mail\",\n       \"status\": 200,\n       \"data\": null\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\":true ,\n       \"message\": \"Error Occured\",\n       \"status\": 400,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "User_Management",
    "name": "PostApiV10Restore"
  },
  {
    "type": "post",
    "url": "/api/v1.0/signup",
    "title": "Sign-Up Function",
    "version": "0.0.1",
    "group": "User_Management",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User-Created\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n        userId:String\n        email:String\n        textPassword:String,\n        password:String,\n        firstName:String,\n        lastName:String,\n        mobileNumber : String,\n        countryCode:String,\n            \n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To SignUp\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Routing.js",
    "groupTitle": "User_Management",
    "name": "PostApiV10Signup"
  }
] });
