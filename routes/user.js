import express from 'express';
import User from '../models/User.js';
import verifyToken from '../middleware/verifyToken.js';

const userRouter = express.Router()

//Get all users
userRouter.get('/', async (req, res) => {
  try{
    const users = await User.find();
    res.json(users)
  } catch(err) {
    res.status(500).json({message: err.message})
  }
});

//Get user by id
userRouter.get('/:id', async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch(err){
    res.status(400).json({message:  err.message})
  }
})

//Update user by id
userRouter.put('/:id', async(req, res) => {
  const user = await User.findById(req.params.id);
  if(!user) {
    return res.status(400).json({message: 'User not found'})
  }
  try{
    const updatedUser = await User.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json(updatedUser)

  } catch(err){
    res.status(400).json({message: err.message})
  }
})

//Delete user by id
userRouter.delete('/:id', async(req, res) => {
  const user = await User.findById(req.params.id);
  if(!user) {
    return res.status(400).json({message: 'User not found'});
  }
  try{
    const deletedUser = await User.deleteOne({_id: req.params.id});
    res.status(200).json(deletedUser)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})

export default userRouter;