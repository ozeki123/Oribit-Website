import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

// export const getUsers = async (req, res) => {
//   try{
//     const users = await User.find();
//     res.json(users);
//   } catch(err) {
//     res.status(500).json({message: err.message});
//   }
// }

// export const getUserById = async (req, res) => {
//   try{
//     const user = await User.findById(req.params.id);
//     res.json(user);
//   } catch(err) {
//     res.status(500).json({message: err.message});
//   }
// }

// export const createUser = async (req, res) => {
//   // const user = new User(req.body);
//   try{
//     const { name, email, password } = req.body;
//     console.log(req.body)
//     if(!name || !email || !password) {
//       res.status(400).json({message: 'Please enter all fields'})
//     }

//     User.findOne({email})
//     .then((savedUser) => {
//       if(savedUser){
//         res.status(400).json({message: 'User already exists'});
//       }
      
//       const newUser = new User({ name, email, password});

//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(password, salt, (err, hash) => {
//           if(err) throw err;
//           newUser.password = hash;
//           newUser.save()
//                  .then(user => {
//                    jwt.sign(
//                      { id: user._id },
//                      process.env.JWT_SECRET,
//                      { expiresIn: '7d'},
//                      (err, token) => {
//                        if(err) throw err;
//                        res.json({
//                          token,
//                          user:{
//                            id: user._id,
//                            name: user.name,
//                            email: user.email
//                          }
//                        })
//                      }
//                    )
//                  })
//         })
//       })
//     })
//   } catch(err){
//     console.log(err)
//   }
//     // const findUser = await User.findOne({ email });

//     // if(findUser) {
//     //   return res.status(400).json('User already exists.')
//     // }

//     // encryptedPassword = await bcrypt.hash(password, 10);

//     // const user = new User({
//     //   name,
//     //   email,
//     //   password,
//     // })

//     // const token = jwt.sign(
//     //   { user_id: user._id, email},
//     //   process.env.JWT_SECRET,
//     //   {
//     //     expiresIn: "7d"
//     //   }
//     // );

//     // user.token = token;

//     // res.status(201).json(user);
      
    
//     } 

// export const loginUser = async (req,res) => {
//   const { email, password} = req.body;
//   if(!email || !password){
//     res.status(400).json({msg: 'Please enter all fields'});
//   }
//   User.findOne({email})
//     .then(user => {
//       if(!user) {
//         res.status(400).json({message: 'User does not exist'})
//       }
//       bcrypt.compare(password, user.password)
//         .then(isMatch => {
//           if(!isMatch){
//             res.status(400).json({msg: 'Invalid credentials'})
//           }
//           res.json({message: "User logged in"})
//         })
//     })
// }




// export const updateUser = async (req, res) => {
//   const user = await User.findById(req.params.id);
//   if(!user) return res.status(404).json({message: 'User not found'});
//   try{
//       const updatedUser = await User.updateOne({_id: req.params.id}, {$set: req.body});
//       res.status(200).json(updatedUser);
//   } catch(err){
//       res.status(400).json({message: err.message});
//   }

// }

// export const deleteUser = async(req, res) => {
//   const user = await User.findById(req.params.id);
//   if(!user) return res.status(404).json({message: 'No data found'});
//   try{
//       const deletedUser = await User.deleteOne({_id: req.params.id});
//       res.status(200).json(deletedUser)
//   } catch(err){
//       res.status(400).json({message: err.message})
//   }
// }