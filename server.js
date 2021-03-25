//import modules needed
const express= require("express");
const app= express();//init express
const PORT = process.env.PORT || 5000;//grabs port from enviornment or 8000
const path = require("path");
const uuid = require("uuid");


//Middleware functions NEEDED
app.use(express.urlencoded({ extended: true }));//handle url encoded data
app.use(express.json());// body parser
app.use(express.static("public"));// sets public folder to static

//html routes
//goes to page "", creates function with request n response
app.get("/notes", function(req,res){
    //gets response, transfers file and joins to create path with current dir,in public folder, creates file
    res.sendFile(path.join(__dirname,"public","notes.html"));
})


// API routes
//get all notes
app.get("/api/notes", function(req,res){
    //retrieve all notes and res.json them back to front end;
    res.json(notes); 
});

app.post("/api/notes", function(req,res){
    //creates a note from req.body; save note

    res.send(req.body);
});
// app.delete("/api/notes/:id", function(req,res){
//     //delete a note based off iD
//     const {id}= req.params;
// })
//listening on port var, logs in console to know its running
app.listen(PORT, ()=> console.log("App listening on port "+ PORT));



// <!-- GET -Read Data -->
// <!-- POST - Create Data -->
// <!-- PUT -Update Data -->
// <!-- DELETE -Delete Data -->