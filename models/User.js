import mongoose from "mongoose";

const User = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  username:{
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
  },
  token: {
    type: String
  },
  role:{
    type: String,
    default: 'user',
    enum: ['user', 'owner', 'admin']
  }
});

export default mongoose.model('User', User);