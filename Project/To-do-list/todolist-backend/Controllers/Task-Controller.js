const ListModel = require("./../Models/List");
var shortid = require('shortid');
const response = require("./../Libraries/Response");
const taskModel = require("./../Models/Task");

//Managing Lists:

let createToDo = (req, res) => {
    let id = shortid.generate();
    let newList = new ListModel();
    newList.name = req.body.name;
    newList.id = id;
    newList.description = req.body.description;
    newList.createdBy = req.body.createdBy;
    newList.tasks = req.body.task;
    newList.save((err, result) => {
        if (err) {
            let apiResponse = response.generate("True", "List Not Created", 400, null);
            res.send(apiResponse);
        }
        let apiResponse = response.generate("False", "List Created", 200, result);
        res.send(apiResponse);
    }
    )
}
let deleteToDo = (req, res) => {
    ListModel.findOneAndRemove({ 'id': req.params.id }, (err, result) => {
        if (err) {
            let apiResponse = response.generate("True", "List Not Deleted", 400, null);
            res.send(apiResponse);
        }
        else {
            let apiResponse = response.generate("False", "List Deleted", 200, result);
            res.send(apiResponse);
        }
    })
}
let alltoDo = (req, res) => {
    ListModel.find()
        .select('-__v -_id')
        .lean().exec((err, result) => {
            if (err) {
                let apiResponse = response.generate("true", "Failed To Find Details", 400, null);
                res.send(apiResponse);
            }
            else if (result == undefined || result == null) {
                let apiResponse = response.generate("true", "List is empty", 400, null);
                res.send(apiResponse);
            }
            else {
                let apiResponse = response.generate("false", "Tasks List Found", 200, result);
                res.send(apiResponse);
            }
        })
}
let singletoDo = (req, res) => {
    ListModel.findOne({ "id": req.params.id }).select("-__v -_id").lean()
        .exec((err, result) => {
            if (err) {
                let apiResponse = response.generate("true", "Failed To Find Details", 400, null);
                res.send(apiResponse);
            }
            else {
                let apiResponse = response.generate("false", "Task Found", 200, result);
                res.send(apiResponse);

            }
        })
}
//Managing Tasks
let createTask = (req, res) => {
    let taskarray=[];
    let id = shortid.generate();
    let newTask = new taskModel()
    newTask.taskid = id;
    newTask.taskName = req.body.taskName;
    newTask.listid = req.body.listid;
    newTask.save((err, result) => {
        if (err) {
            let apiResponse = response.generate("true", "Unable To Create Model", 400, null)
            res.send(apiResponse);
        }
        else {
            let apiResponse = response.generate("false", "TaskCreated", 200, result);
            res.send(apiResponse);
        }

    })
}
let alltasks = (req, res) => {
    taskModel.find().select('-__v -_id').lean().exec((err, result) => {
        if (err) {
            let apiResponse = response.generate("false", "Unable to Retrieve Details", 400, null)
            res.send(apiResponse);
        }
        else {
            let apiResponse = response.generate("true", "Tasks Found", 200, result)
            res.send(apiResponse);
        }
    })
}
let deleteSingletask=(req,res)=>{

    taskModel.findOneAndRemove({"taskid":req.params.id},(err,result)=>{
        if(err){
            let apiResponse = response.generate("true","Unable To Delete",400,null);
            res.send(apiResponse);
        }
        else{
            let apiResponse = response.generate("false","Task Deleted",200,result);
            res.send(apiResponse);
        }
    })
}
let deletetasks=(req,res)=>{
    taskModel.deleteMany({"listid":req.params.id},(err,result)=>{
        if(err){
         let apiResponse = response.generate("true","Unable To Delete",400,null);
         res.send(apiResponse);
        }
        else{
        let apiResponse = response.generate("false","All Tasks Deleted",200,result);
         res.send(apiResponse);
        }
    })
}
module.exports = {
    createToDo: createToDo,
    deleteToDo: deleteToDo,
    alltoDo: alltoDo,
    singletoDo: singletoDo,
    createTask: createTask,
    alltasks: alltasks,
    deleteSingletask:deleteSingletask,
    deletetasks:deletetasks
}
