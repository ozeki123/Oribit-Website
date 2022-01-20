import express from 'express';
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
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role || 'user'
  }); 

  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
  user.token = token;
  await user.save()

  try{
    const savedUser = await user.save();
    res.send({id: user._id,
              name: user.name,
              username: user.username,
              email: user.email,
              token: user.token,
              role: user.role
              // roles: user.roles
            });
  } catch(err){
    res.status(400).send(err);
  }
})

authRouter.post('/login', async (req,res) => {
  //Check if email exists in database
  const email = await User.findOne({email: req.body.email});
  const user = await User.findOne({username: req.body.username});
  if(!user && !email) {
    return res.status(400).json({message: 'Username or email is incorrect'});
  }

  // let validPassword = false;

  // if(!user && email) {
  //   validPassword = await bcrypt.compare(req.body.password, user.password);
  // } else {
  //   validPassword = await bcrypt.compare(req.body.password, email.password);
  // }

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  //Check if password is correct
  
  if(!validPassword){
    return res.status(400).json({message: 'Invalid password'});
  }

  //Create and assign a token to user
  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
  res.send({
    'token': token,
    'id': user._id,
    'role': user.role
    // 'roles': roles
  });
  // res.header('token', token).send(token);
})

// userRouter.get('/users', getUsers);
// userRouter.get('/users/:id', getUserById);
// userRouter.post('/users', createUser);
// userRouter.post('/login', loginUser)
// userRouter.put('/users/:id', updateUser);
// userRouter.delete('/users/:id', deleteUser);

export default authRouter;