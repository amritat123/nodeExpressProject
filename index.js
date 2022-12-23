const express = require("express");
const app = express();
const task = require("./api/routes/task");
const taskcontroller = require("./api/controller/task");


// Middleware..
app.use(express.json());

// Server Runing PORT 
const port =  3000;
app.listen(port , console.log(`Server is runing on port ${port}`));

// routes 
// Get request from  
app.get('/',(req,res)=> {
    res.send("Api is Runing")
});

app.use('/api/v1/task',task);



