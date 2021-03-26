const path = require("path");
const router = require("express").Router();
//html routes
//goes to endpoint "/", creates function with request n response
router.get("/", function(req,res){
    //returns response,creates path with current dir,with public folder, and index.html 
    res.sendFile(path.join(__dirname,"public","index.html"));
})

//goes to endpoint "/notes", creates function with request n response
router.get("/notes", function(req,res){
    //reutns response, creates path with current dir,with public folder, and notes.html is displayed
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

module.exports = router;