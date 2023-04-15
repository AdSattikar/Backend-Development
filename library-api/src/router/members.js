const express = require('express')
const Book = require("../models/book");
const Member = require('../models/member');
//Create a new router
const router  = new express.Router()

//set path
router.get("/adnan",(req,res)=>{
    res.send("Digital Assignment 2: Library management System 20MIC0124")
})


router.post("/members", async (req, res) => {
    try {
        console.log(req.body);
        const member = new Member(req.body);

        const createMember = await member.save();
        res.status(201).send(createMember);
    }
    catch(e) {
        res.status(400).send(e);
    }
})

router.get("/members", async(req,res)=>{
  try{
   const membersData = await Member.find()
   res.send("got members: "+membersData)
  }catch(e){
    res.send(e)
  }
})

// get individual member 
router.get("/members/:_id", async(req,res)=>{
    try {
        const _id = req.params._id;
        const singleMember = await Member.findById({_id})
        console.log(singleMember)

        if(!singleMember){
            return res.status(404).send();
        }else{
            res.send("got member: "+singleMember)
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

//update member by id
router.patch("/members/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const updateMember= await Member.findByIdAndUpdate(id,req.body,{new:true});
        console.log(updateMember)
        res.send("updated member: "+updateMember)
        
    } catch (e) {
        res.status(400).send(e)
    }
})
router.post("/members/issue-book", async (req, res) => {
    try {
      const { memberId, bookId, dueDate } = req.body;
  
      const member = await Member.findById(memberId);
      const book = await Book.findById(bookId);
  
      if (!member || !book) {
        return res.status(404).send("Member or book not found");
      }
  
      if (book.availableCopies <= 0) {
        return res.status(400).send("No available copies of this book");
      }
  
      const issuedBook = {
        bookId: book._id,
        issuedDate: new Date(),
        dueDate: new Date(dueDate),
      };
  
      member.issuedBooks.push(issuedBook);
      member.save();
  
      book.availableCopies--;
      book.issuedCopies++;
      book.save();
  
      res.status(201).send(`Book ${book.name} issued to ${member.name}`);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
// delete member by id

router.delete("/members/:id", async(req,res) => {
    try{
        const deleteMember = await Member.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send("deleting member "+deleteMember)
    }catch(e){
        res.status(500).send(e)
    }
})
//export router
module.exports = router