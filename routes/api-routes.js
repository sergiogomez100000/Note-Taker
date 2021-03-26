const router = require("express").Router();
const { rmSync } = require("fs");
const store = require("../db/store.js");
const notes = "";
// API routes
//get all notes
router.get("/notes", function(req,res){
 // retrieve all notes and res.json them back to front end;
    // read contents of dbjson send them to user
    // fs.promises.readFile("./db/db.json", "utf8", function(err,data){
    //    res.json(JSON.parse(data)); 
    // })
    // .catch((error) => {
    //     console.error(error);
    //        });
    // res.json(notes); 
    console.log(res)
    store.getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

router.post("/notes", function(req,res){
    store.saveNotes(notes)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
//     //creates a note from req.body; save note
//     const note = {
//         id: uuidv4(),
//         title: req.body.title,
//         text: req.body.text,
    // }
//     //read data from db json
//     fs.promises.readFile("../db/db.json","utf8",function(err,note){
//         res.json(JSON.parse(note));
//         notes.push(note);
//         JSON.stringify(notes);
//         fs.promises.writeFile("./db/db.json", notes, "utf8",function(err,data){
//             res.send(notes);
//         })
//         .catch((error) => {
//             console.error(error);
//           });
//     })
//     //parse out array
//     //push to array
//     //stringify
//     //write to file with new array
//     //respond to user

//     res.json(note);
});

//store.getNotes
    // .then()
    // .catch()

module.exports = router;