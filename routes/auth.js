import express from 'express';
import { getUsers,
         getUserById,
         createUser,
         updateUser,
         deleteUser,
         loginUser } from '../controllers/userController.js';
import verifyToken from '../middleware/verifyToken.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
  //Check if user is already in the database
  const findEmail = await User.findOne({email: req.body.email});
  if(findEmail) {
    return res.status(400).json({message: 'Email already exists'});
  }

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  }); 
  try{
    const savedUser = await user.save();
    res.send({user: user._id});
  } catch(err){
    res.status(400).send(err);
  }
})

authRouter.post('/login', async (req,res) => {
  //Check if email exists in database
  const user= await User.findOne({email: req.body.email});
  if(!user) {
    return res.status(400).json({message: 'Email is incorrect'});
  }
  //Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if(!validPassword){
    return res.status(400).json({message: 'Invalid password'});
  }

  //Create and assign a token to user
  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
  res.header('auth-token', token).send(token);

  res.send('Logged in')
})

// userRouter.get('/users', getUsers);
// userRouter.get('/users/:id', getUserById);
// userRouter.post('/users', createUser);
// userRouter.post('/login', loginUser)
// userRouter.put('/users/:id', updateUser);
// userRouter.delete('/users/:id', deleteUser);

export default authRouter;