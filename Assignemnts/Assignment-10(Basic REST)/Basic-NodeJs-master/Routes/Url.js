const express = require('express');
const control = require('./../Controller/Control');
const appConfig = require('./../Config/appConfig');

let setRoute = (app) => {
    let baseUrl = appConfig.apiVersion + '/products'
    let baseUrl2 = appConfig.apiVersion + '/cart'
    app.get(baseUrl + '/all', control.getAll);
    /**
	 * @api {get} /api/v2/products/all Get all products
	 * @apiVersion 0.0.2
	 * @apiGroup Product
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All  Details Found",
	    "status": 200,
	    "data": [
            {
                phoneId:String
    name: String
    manufacturer:String
    price:String
    displaySize:String,
    displayType:String
    OS:String
    processorCore:String
    processorSpeed:String
    storage:String,
    RAM: String
    frontCamera:String,
    secondaryCamera:String
    battery: String,
    warranty: String
            }
        ]
    }
}
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/view/:id', control.getSingle);
    /**
    * @api {get} /api/v2/products/view Get single product
    * @apiVersion 0.0.2
    * @apiGroup Product
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
       "error": false,
       "message": "All  Details Found",
       "status": 200,
       "data": [
           {
               phoneId:String
   name: String
   manufacturer:String
   price:String
   displaySize:String,
   displayType:String
   OS:String
   processorCore:String
   processorSpeed:String
   storage:String,
   RAM: String
   frontCamera:String,
   secondaryCamera:String
   battery: String,
   warranty: String
           }
       ]
   }
}
}
     @apiErrorExample {json} Error-Response:
    *
    * {
       "error": true,
       "message": "Failed To Find Product Details",
       "status": 500,
       "data": null
      }
    */
    app.post(baseUrl + '/create', control.createProduct);
    /**
    * @api {post} /api/v2/products/create Create A Product
    * @apiVersion 0.0.2
    * @apiGroup Product
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
       "error": false,
       "message": "Product Has Been Created",
       "status": 200,
       "data": [
           {
               phoneId:String
   name: String
   manufacturer:String
   price:String
   displaySize:String,
   displayType:String
   OS:String
   processorCore:String
   processorSpeed:String
   storage:String,
   RAM: String
   frontCamera:String,
   secondaryCamera:String
   battery: String,
   warranty: String
           }
       ]
   }
}
}
     @apiErrorExample {json} Error-Response:
    *
    * {
       "error": true,
       "message": "Failed To Create Product",
       "status": 500,
       "data": null
      }
    */
    app.delete(baseUrl + '/del/:id', control.deleteProduct);
    /**
    * @api {delete} /api/v2/products/del Delete A Product
    * @apiVersion 0.0.2
    * @apiGroup Product
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
       "error": false,
       "message": "Product Deleted",
       "status": 200,
       "data": [
           {
               phoneId:"String"
   name: String
   manufacturer:String
   price:String
   displaySize:String
   displayType:String
   OS:String
   processorCore:String
   processorSpeed:String
   storage:String
   RAM: String
   frontCamera:String
   secondaryCamera:String
   battery: String
   warranty: String
           }
       ]
   }
}
}
     @apiErrorExample {json} Error-Response:
    *
    * {
       "error": true,
       "message": "Failed To Delete Product",
       "status": 500,
       "data": null
      }
    */
    app.put(baseUrl + '/edit/:id', control.editProduct);
    /**
    * @api {put} /api/v2/products/edit   Used To Edit Product
    * @apiVersion 0.0.2
    * @apiGroup Product
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
       "error": false,
       "message": "All  Details Found",
       "status": 200,
       "data": [
           {
               phoneId:String
   name: String
   manufacturer:String
   price:String
   displaySize:String,
   displayType:String
   OS:String
   processorCore:String
   processorSpeed:String
   storage:String,
   RAM: String
   frontCamera:String,
   secondaryCamera:String
   battery: String,
   warranty: String
           }
       ]
   }
}
}
     @apiErrorExample {json} Error-Response:
    *
    * {
       "error": true,
       "message": "Failed To Find Product Details",
       "status": 500,
       "data": null
      }
    */
    app.post(baseUrl2 + '/orders', control.addCart);
    /**
    * @api {post} /api/v2/cart/orders Add a Product To Cart
    * @apiVersion 0.0.2
    * @apiGroup Cart
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
       "error": false,
       "message": "All  Details Found",
       "status": 200,
       "data": [
           {
        orderid:"string"
        quantity:"string"
        productname:"string"
           }
       ]
   }
}
}
     @apiErrorExample {json} Error-Response:
    *
    * {
       "error": true,
       "message": "Failed To Find Product Details",
       "status": 500,
       "data": null
      }
    */
    app.delete(baseUrl2 + '/remove/:id', control.removeCart);
    /**
	 * @api {delete} /api/v2/cart/remove Remove a Product From Cart
	 * @apiVersion 0.0.2
	 * @apiGroup Cart
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All  Details Found",
	    "status": 200,
	    "data": [
            {
         orderid:"string"
         quantity:"string"
         productname:"string"
            }
        ]
    }
}
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl2 + '/show', control.showCart);
    /**
	 * @api {get} /api/v2/cart/show Show The Products Of A Cart
	 * @apiVersion 0.0.2
	 * @apiGroup Cart
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All  Details Found",
	    "status": 200,
	    "data": [
            {
         orderid:"string"
         quantity:"string"
         productname:"string"
            }
        ]
    }
}
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */
}
module.exports = {
    setRoute: setRoute
}