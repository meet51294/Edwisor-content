define({ "api": [
  {
    "type": "delete",
    "url": "/api/v2/cart/remove",
    "title": "Remove a Product From Cart",
    "version": "0.0.2",
    "group": "Cart",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All  Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         orderid:\"string\"\n         quantity:\"string\"\n         productname:\"string\"\n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Url.js",
    "groupTitle": "Cart",
    "name": "DeleteApiV2CartRemove"
  },
  {
    "type": "get",
    "url": "/api/v2/cart/show",
    "title": "Show The Products Of A Cart",
    "version": "0.0.2",
    "group": "Cart",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All  Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n         orderid:\"string\"\n         quantity:\"string\"\n         productname:\"string\"\n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Url.js",
    "groupTitle": "Cart",
    "name": "GetApiV2CartShow"
  },
  {
    "type": "post",
    "url": "/api/v2/cart/orders",
    "title": "Add a Product To Cart",
    "version": "0.0.2",
    "group": "Cart",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n       \"error\": false,\n       \"message\": \"All  Details Found\",\n       \"status\": 200,\n       \"data\": [\n           {\n        orderid:\"string\"\n        quantity:\"string\"\n        productname:\"string\"\n           }\n       ]\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Failed To Find Product Details\",\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Url.js",
    "groupTitle": "Cart",
    "name": "PostApiV2CartOrders"
  },
  {
    "type": "delete",
    "url": "/api/v2/products/del",
    "title": "Delete A Product",
    "version": "0.0.2",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n       \"error\": false,\n       \"message\": \"Product Deleted\",\n       \"status\": 200,\n       \"data\": [\n           {\n               phoneId:\"String\"\n   name: String\n   manufacturer:String\n   price:String\n   displaySize:String\n   displayType:String\n   OS:String\n   processorCore:String\n   processorSpeed:String\n   storage:String\n   RAM: String\n   frontCamera:String\n   secondaryCamera:String\n   battery: String\n   warranty: String\n           }\n       ]\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Failed To Delete Product\",\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Url.js",
    "groupTitle": "Product",
    "name": "DeleteApiV2ProductsDel"
  },
  {
    "type": "get",
    "url": "/api/v2/products/all",
    "title": "Get all products",
    "version": "0.0.2",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All  Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n            {\n                phoneId:String\n    name: String\n    manufacturer:String\n    price:String\n    displaySize:String,\n    displayType:String\n    OS:String\n    processorCore:String\n    processorSpeed:String\n    storage:String,\n    RAM: String\n    frontCamera:String,\n    secondaryCamera:String\n    battery: String,\n    warranty: String\n            }\n        ]\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Url.js",
    "groupTitle": "Product",
    "name": "GetApiV2ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v2/products/view",
    "title": "Get single product",
    "version": "0.0.2",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n       \"error\": false,\n       \"message\": \"All  Details Found\",\n       \"status\": 200,\n       \"data\": [\n           {\n               phoneId:String\n   name: String\n   manufacturer:String\n   price:String\n   displaySize:String,\n   displayType:String\n   OS:String\n   processorCore:String\n   processorSpeed:String\n   storage:String,\n   RAM: String\n   frontCamera:String,\n   secondaryCamera:String\n   battery: String,\n   warranty: String\n           }\n       ]\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Failed To Find Product Details\",\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Url.js",
    "groupTitle": "Product",
    "name": "GetApiV2ProductsView"
  },
  {
    "type": "post",
    "url": "/api/v2/products/create",
    "title": "Create A Product",
    "version": "0.0.2",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n       \"error\": false,\n       \"message\": \"Product Has Been Created\",\n       \"status\": 200,\n       \"data\": [\n           {\n               phoneId:String\n   name: String\n   manufacturer:String\n   price:String\n   displaySize:String,\n   displayType:String\n   OS:String\n   processorCore:String\n   processorSpeed:String\n   storage:String,\n   RAM: String\n   frontCamera:String,\n   secondaryCamera:String\n   battery: String,\n   warranty: String\n           }\n       ]\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Failed To Create Product\",\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Url.js",
    "groupTitle": "Product",
    "name": "PostApiV2ProductsCreate"
  },
  {
    "type": "put",
    "url": "/api/v2/products/edit",
    "title": "Used To Edit Product",
    "version": "0.0.2",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n       \"error\": false,\n       \"message\": \"All  Details Found\",\n       \"status\": 200,\n       \"data\": [\n           {\n               phoneId:String\n   name: String\n   manufacturer:String\n   price:String\n   displaySize:String,\n   displayType:String\n   OS:String\n   processorCore:String\n   processorSpeed:String\n   storage:String,\n   RAM: String\n   frontCamera:String,\n   secondaryCamera:String\n   battery: String,\n   warranty: String\n           }\n       ]\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Failed To Find Product Details\",\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "Routes/Url.js",
    "groupTitle": "Product",
    "name": "PutApiV2ProductsEdit"
  }
] });
