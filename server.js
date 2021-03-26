//import modules needed
const express= require("express");
const app= express();//init express
const PORT = process.env.PORT || 5000;//grabs port from enviornment or 8000
// const path = require("path");
// const fs = require("fs");
// const { v4: uuidv4 } = require('uuid');
// uuidv4();
// const notes = [];
const htmlRoutes = require("./routes/html-routes.js");
const apiRoutes = require("./routes/api-routes.js")

//Middleware functions NEEDED
app.use(express.urlencoded({ extended: true }));//handle url encoded data
app.use(express.json());// body parser
app.use(express.static("public"));// sets public folder to static

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);







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