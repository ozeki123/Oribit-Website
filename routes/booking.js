import express from 'express';
import Booking from '../models/Booking.js';
import groupRouter from './group.js';

const bookingRouter = express.Router();

bookingRouter.get('/', async (req, res) => {
  try{
    const bookings = await Booking.find();
    res.json(bookings);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

bookingRouter.get('/:id', async(req, res) => {
  try{
    const booking = await Booking.findById(req.params.id);
    res.json(booking);
  } catch(err) {
    res.status(501).json({messaage: err.message});
  }
})

bookingRouter.post('/', async (req, res) => {
  //Check if booking date exists
  // const findBooking = await Booking.findOne({bookingDate: req.body.bookingDate})
  // if(findBooking) {
  //   return res.status(400).json({message: 'Time Unavailable'});
  // }
  
  const bookingReq = new Booking(req.body);
  const checkBooking = await Booking.find({itemId: req.body.itemId})
      .where("startDate").lt(bookingReq.endDate)
      .where("endDate").gt(bookingReq.startDate)
      .exec();
    
      if(checkBooking.length === 0){
        const saveBooking = await bookingReq.save();
        res.status(200).json(saveBooking);
      } else {
        checkBooking.forEach( booking => {
          res.status(400).json({message: `${String(booking.startDate)} to ${String(booking.endDate)} is unavailable`})
        })
      }
//   try{
//     //Check if court exists
    
    
//     // if(!booking){
//     //   res.status(400).json({message: "Item not found"})
//     // } else {
      
//     //   const newBooking = bookingReq.bookingDate;
//     //   console.log("new date", bookingReq.bookingDate);

//     //   let dateBoolean = true; 
      
//     //   Object.values(booking).forEach(val => {
//     //     console.log("val", val.bookingDate)
//     //     if(newBooking == val.bookingDate) {
          
//     //       dateBoolean = false;
//     //     }
//     //   })

//     //   if(dateBoolean) {
//     //     const savedBooking = await bookingReq.save()
//     //     res.status(201).json(savedBooking);
//     //   } else {
//     //     res.status(401).json({message: "Time unavailable"});
//     //   }

      

//       // const existBooking = booking[0].bookingDate;
      
//       // if(existBooking === newBooking){
//       //   console.log("Time Unavailable");
//       // } else {
//       //   const savedBooking = await bookingReq.save()
//       //   res.status(201).json(savedBooking);
//       // }
//       // console.log(booking.bookingDate)
//       // const date = await booking.findOne({bookingDate: req.body.bookingDate})
//       // if(!date) {
        
//       // } else{
//         // res.status(401).json({message: "Time unavailable"})
//       // }
      
//     }
//     // if (booking) {
//     //   console.log(req.body);
//     // }
//     // const dateString = 
//     // const date = booking.bookingDate;
//     // const dateString = date + booking.startHour;
//     // const startDate = date + startHour;
//     // const endDate = date + endHour;
    
    
//     // const bookingDate = new Date(dateString);
//     // booking.bookingDetails.bookingDate = bookingDate;
//     // console.log(bookingDate);

//     //date time from front end comes in "startDate": "2022/08/03 17:00 UTC"
//     //find booking date first

     

//     // if(bookingExist > 0) {
//     //   res.status(400).json({message: "Time unavailable"})
//     // } else {
//     //   const savedBooking = await booking.save();
//     //   res.status(200).json(savedBooking);
//     // }
      
//     //   (error, count) => {
//     //   if(bookingExist>0){
//     //     res.status(400).json({message: err.message})
//     //   } else{
//     //     const savedBooking = booking.save();
//     //     res.status(200).json(savedBooking)
//     //   }
//     // }
    
    
//     // res.status(200).json(savedBooking);
//   } catch(err){
//     res.status(400).json({message: err.message})
//   }
 })

bookingRouter.put('/:id', async(req, res) => {
  const booking = await Booking.findById(req.params.id);
  if(!booking) {
    return res.status(400).json({message: 'Booking not found'})
  }
  try{
    const updatedBooking = await Booking.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json(updatedBooking)
  } catch(err){
    res.status(400).json({message: err.message})
  }
})

bookingRouter.delete('/:id', async(req, res) => {
  const booking = await Booking.findById(req.params.id);
  if(!booking) {
    return res.status(400).json({message: 'Booking not found'});
  }
  try{
    const deletedBooking  = await Booking.deleteOne({_id: req.params.id});
    res.status(200).json(deletedBooking)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})

export default bookingRouter;