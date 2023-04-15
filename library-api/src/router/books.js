const express = require('express')
const Book = require("../models/book");
//Create a new router
const router  = new express.Router()

//set path
router.get("/adnan",(req,res)=>{
    res.send("Digital Assignment 2: Library management System 20MIC0124")
})


router.post("/books", async (req, res) => {
    try {
        console.log(req.body);
        const book = new Book(req.body);

        const createBook = await book.save();
        res.status(201).send(createBook);
    }
    catch(e) {
        res.status(400).send(e);
    }
})

router.get("/books", async(req,res)=>{
  try{
   const booksData = await Book.find()
   res.send("got books: "+booksData)
  }catch(e){
    res.send(e)
  }
})

// get individual book 
router.get("/books/:_id", async(req,res)=>{
    try {
        const _id = req.params._id;
        const singleBook = await Book.findById({_id})
        console.log(singleBook)

        if(!singleBook){
            return res.status(404).send();
        }else{
            res.send("get book: "+singleBook)
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

//update book by id
router.patch("/books/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const updateBook = await Book.findByIdAndUpdate(id,req.body,{new:true});
        console.log(updateBook)
        res.send("updated book: "+updateBook)
        
    } catch (e) {
        res.status(400).send(e)
    }
})

// delete book by id

router.delete("/books/:id", async(req,res) => {
    try{
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send("deleting book: "+deleteBook)
    }catch(e){
        res.status(500).send(e)
    }
})
//export router
module.exports = router