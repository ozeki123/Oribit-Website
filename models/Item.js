import mongoose from "mongoose";

const Item = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    }
});

export default mongoose.model('Items', Item);