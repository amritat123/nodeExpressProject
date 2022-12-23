
// for Get
const getAllTask = (req, res) => { res.send("get all task!") };

// get single task
const getTask = (req,res) => {res.send("get one task!")}
// for Create 
const createTask = (req, res) => { res, send("Create Task!") };

// for Update/patch
const updateTask = (req, res) => { res.send("Update Task!") };

// for Delete
const deleteTask = (req, res) => { res.send("Delete the task!") };

module.exports = { getAllTask, createTask,getTask, updateTask, deleteTask };