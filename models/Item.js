import mongoose from "mongoose";

const Item = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        // required: true,
    },
    location: {
        type: String,
        // required: true
    },
    owner: {
        type: String,
        // required: true,
    },
    age: {
        type: Number
    },
    contact: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String,
        // required: true
    },
    
    // rating: {
    //     type: Number
    // },

},
{
    timestamps: true
});

export default mongoose.model('Items', Item);