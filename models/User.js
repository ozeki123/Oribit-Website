import mongoose from "mongoose";

const User = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    unique: true,
    required: true
  }, 
  password:{
    type: String,
    required: true
  }
});

export default mongoose.model('User', User);