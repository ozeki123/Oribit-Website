import mongoose from "mongoose";

const Group = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    required: true,
  },
  sport: {
    type: String
  },
  location: {
    type: String,
  },
  members: {
    type: [String]
  }
},
{
  timestamps: true
});

export default mongoose.model('Group', Group);