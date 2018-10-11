let errorHandler = (err,req,res,next) =>{
    console.log("Application Error Handler");
    console.log(err)
    res.send("Some Error Occured At Global Level")
}
let notFoundHandler = (req,res,next) =>{
    console.log("Global Not Found Handler")
    res.status(404).send('Route Not Found')
   
}
module.exports = {
    globalErrorHandler : errorHandler,
    globalNotFoundHandler:notFoundHandler
}