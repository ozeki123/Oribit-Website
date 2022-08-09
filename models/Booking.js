import mongoose from "mongoose";
import Schema from "mongoose";

const Booking = mongoose.Schema({
  itemId: {type: String},
  currentDate: {type: String},
  bookingDate: {type: Date},
  bookingDetails: {type: mongoose.SchemaTypes.Mixed},
  // bookingStart: {type: Date},
  // bookingEnd: {type: Date},
  startDate: {type: Date},
  endDate: {type: Date},
  guests: {type: Number},
  purpose: {type: String}
});

export default mongoose.model('Booking', Booking);
