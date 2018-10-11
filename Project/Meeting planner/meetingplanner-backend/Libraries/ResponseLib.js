let generateResponse = (error,message,status,data)=>{
    let apiResponse = {
        error:error,
        message:message,
        status:status,
        data:data
    }
    return apiResponse
}

module.exports = {
    generate:generateResponse
}