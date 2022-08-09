import mongoose from "mongoose";

const Image = mongoose.Schema(
  {
  image: { type: String,  required: true }
  }, 
  { timestamps: true}
);

export default mongoose.model('Image', Image);