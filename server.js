//import modules needed
const express= require("express");
const app= express();//init express
const PORT = process.env.PORT || 5000;//grabs port from enviornment or 8000
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
uuidv4();
const notes = [];

//Middleware functions NEEDED
app.use(express.urlencoded({ extended: true }));//handle url encoded data
app.use(express.json());// body parser
app.use(express.static("public"));// sets public folder to static

//html routes
//goes to endpoint "/", creates function with request n response
app.get("/", function(req,res){
    //returns response,creates path with current dir,with public folder, and index.html 
    res.sendFile(path.join(__dirname,"public","index.html"));
})
//goes to endpoint "/notes", creates function with request n response
app.get("/notes", function(req,res){
    //reutns response, creates path with current dir,with public folder, and notes.html is displayed
    res.sendFile(path.join(__dirname,"public","notes.html"));
})


// API routes
//get all notes
app.get("/api/notes", function(req,res){
    //retrieve all notes and res.json them back to front end;
    //read contents of dbjson send them to user
    fs.promises.readFile("./db/db.json", "utf8", function(err,data){
       res.json(JSON.parse(data)); 
    })
    // res.json(notes); 
});

app.post("/api/notes", function(req,res){
    //creates a note from req.body; save note
    const note = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
    }
    //read data from db json
    fs.promises.readFile("../db/db/json","utf8",function(err,note){
        res.json(JSON.parse(note));
        notes.push(note);
        JSON.stringify(notes);
        fs.promises.writeFile("./db/db.json", notes, "utf8",function(err,data){
            res.send(notes);
        })
        // .catch((error) => {
        //     console.error(error);
        //   });
    })
    //parse out array
    //push to array
    //stringify
    //write to file with new array
    //respond to user

    res.json(note);
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