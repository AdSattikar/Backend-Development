const mongoose = require("mongoose")
const validator = require("validator")

const memberSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        reuired:true,
        unique:[true,"Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invaid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    issuedBooks: [
        {
          bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
          },
          issuedDate: {
            type: Date,
          },
          dueDate: {
            type: Date,
          },
        },
      ],
})

const Member = new mongoose.model('Member',memberSchema);

module.exports = Member