const express = require('express')
const appConfig =require('./../AppConfiguration/appConfig')
const Controller = require('./../Controllers/UserController')


let setRoutes=(app)=>{
    let baseURL = `${appConfig.apiVersion}/users`
    app.get(`${baseURL}/view/all`,Controller.getAll);
    app.get(`${baseURL}/:id/details`,Controller.getSingleUser);
    app.post(`${baseURL}/signup`,Controller.signUpFunction);
    app.post(`${baseURL}/login`,Controller.loginFunction)
    app.post(`${baseURL}/:id/delete`,Controller.removeUser);
}
module.exports={
setRoutes:setRoutes
}