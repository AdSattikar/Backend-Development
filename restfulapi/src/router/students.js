const express = require('express')
const Student = require("../models/students");
//Create a new router
const router  = new express.Router()

//set path
router.get("/adnan",(req,res)=>{
    res.send("Hello guys Adnan here!")
})
//create new students
// router.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

router.post("/students", async (req, res) => {
    try {
        console.log(req.body);
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(e) {
        res.status(400).send(e);
    }
})

router.get("/students", async(req,res)=>{
  try{
   const studentsData = await Student.find()
   res.send(studentsData)
  }catch(e){
    res.send(e)
  }
})

// get individual student 
router.get("/students/:_id", async(req,res)=>{
    try {
        const _id = req.params._id;
        const indiStudent = await Student.findById({_id})
        console.log(indiStudent)

        if(!indiStudent){
            return res.status(404).send();
        }else{
            res.send(indiStudent)
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

//update student by id
router.patch("/students/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(id,req.body,{new:true});
        console.log(updateStudent)
        res.send(updateStudent)
        
    } catch (e) {
        res.status(400).send(e)
    }
})

// delete student by id

router.delete("/students/:id", async(req,res) => {
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send("deleting student"+deleteStudent)
    }catch(e){
        res.status(500).send(e)
    }
})
//export router
module.exports = router