const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const Smartphone = require('./../Models/ecommerce')
const Cart = require('./../Models/Cart')
const response = require('./../Libraries/response')

//Getting All PRODUCTS:

let getAll = (req, res) => {
    Smartphone.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err);
                let apiresponse = response.generate(true, "Failed To Find Product Details", 500, null)
                res.send(apiresponse)
            }
            else if (result == undefined || result == '' || result == null) {
                console.log("No PRODUCT Found")
                let apiresponse = response.generate(true, "Product Not Found", 404, null)
                res.send(apiresponse)
            }
            else {
                console.log(result)
                let apiresponse = response.generate(false, "All Details Found", 200, result)
                res.send(apiresponse)
            }
        })
}

//Getting Single PRODUCT:

let getSingle = (req, res) => {
    Smartphone.findOne({ 'phoneId': req.params.id }, (err, result) => {
        if (err) {
            console.log(err);
            let apiresponse = response.generate(true, "Failed To Find Product Details", 500, null)
            res.send(apiresponse)
        }
        else if (result == undefined || result == '' || result == null) {
            console.log("Product Not Found")
            let apiresponse = response.generate(true, "Product Not Found", 404, null)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, "Product Found", 200, result)
            res.send(apiresponse)
        }
    })
}

//Edit A Product:

let editProduct = (req, res) => {
    let options = req.body;
    Smartphone.update({ 'phoneId': req.params.id }, options, { multi: true }, function (err, result) {
        if (err) {
            console.log(err);
            let apiresponse = response.generate(true, "Id Missing", 500, null)
            res.send(apiresponse)
        }
        else if (result == '' || result == undefined || result == null) {
            let apiresponse = response.generate(true, "Product Not Found", 404, null)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, "Product Edited", 200, result)
            res.send(apiresponse)
        }
    }
    )
}


// Deleting A Product:

let deleteProduct = (req, res) => {
    Smartphone.findOneAndRemove(
        { 'phoneId': req.params.id },
        function (err, result) {
            if (err) {
                console.log(err)
                let apiresponse = response.generate(true, "Id missing", 500, null)
                res.send(apiresponse)
            }
            else if (result == undefined || result == '' || result == null) {
                console.log('No Product Found')
                let apiresponse = response.generate(true, "Product Not Found", 404, null)
                res.send("Product Not Found")
            }
            else {
                let apiresponse = response.generate(false, "Product Deleted", 200, result)
                res.send(apiresponse)
            }
        }
    )

}

//CREATE A PRODUCT:
let createProduct = (req, res) => {

    let id = shortid.generate();
    let newPhone = new Smartphone();
    newPhone.phoneId = id
    newPhone.name = req.body.name
    newPhone.manufacturer = req.body.manufacturer
    newPhone.displaySize = req.body.displaySize
    newPhone.price = req.body.price
    newPhone.displayType = req.body.displayType
    newPhone.OS = req.body.os
    newPhone.processorCore = req.body.processorCore
    newPhone.processorSpeed = req.body.processorSpeed
    newPhone.storage = req.body.storage
    newPhone.RAM = req.body.RAM
    newPhone.frontCamera = req.body.frontCamera
    newPhone.secondaryCamera = req.body.secondaryCamera
    newPhone.battery = req.body.battery
    newPhone.warranty = req.body.warranty
    newPhone.save((err, result) => {
        if (err) {
            console.log(err)
            let apiresponse = response.generate(true, "Product Not Created", 404, null)
            res.send(apiresponse)

        }
        else {
            console.log(result)
            let apiresponse = response.generate(false, "Product Has Been Created", 200, result)
            res.send(apiresponse);
        }

    })

}
//Placing A Order:
let addCart = (req, res) => {
    let id = shortid.generate()
    let newCart = new Cart()
    newCart.orderid = id;
    newCart.productname = req.body.productname,
        newCart.quantity = req.body.quantity,
        newCart.save((err, result) => {
            if (err) {
                let apiresponse = response.generate(true, "Item Added In Cart", 404, null)
                res.send(apiresponse)
            }
            else {
                let apiresponse = response.generate(false, "Item Is Added To Cart", 200, result)
                res.send(apiresponse)
            }
        })
}
//Removing Order From Cart:
let removeCart = (req, res) => {
    Cart.findOneAndRemove({ 'orderid': req.params.id }, function (err, result) {
        if (err) {
            let apiresponse = response.generate(true, "Id is not present", 404, null)
            res.send(apiresponse)
        }

        else {
            let apiresponse = response.generate(false, "Item Removed", 200, result)
            res.send(apiresponse)

        }
    })
}
//Show Your All Orders:
let showCart = (req, res) => {
    Cart.find(function (err, result) {
        if (err) {
            let apiresponse = response.generate(true, "Unable to Show Cart", 500, null)
            res.send(apiresponse)
        }
        else if (result == undefined || result == "" || result == null) {
            let apiresponse = response.generate(true, "Cart Empty", 404, null)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, "Items Are Present", 200, result)
            res.send(apiresponse);
        }
    })
}

module.exports = {
    getAll: getAll,
    getSingle: getSingle,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    createProduct: createProduct,
    addCart: addCart,
    removeCart: removeCart,
    showCart: showCart
}