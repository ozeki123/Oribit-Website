import User from '../models/User.js';

export const getUsers = async (req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
}

export const getUserById = async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
}

export const createUser = async (req, res) => {
  // const user = new User(req.body);
  const { name, email, password } = req.body;
  console.log(req.body)
  if(!name || !email || !password) {
    res.status(400).json({msg: 'Please enter all fields'})
  }

  User.findOne({email})
    .then((savedUser) => {
      if(savedUser){
        return res.status(400).json({msg: 'User already exists'});
      }
      const user = new User({email,password,name})
      user.save()
      .then((user) => {
        res.json({message: "saved Successfully"})
        console.log(user.email)
      })
      .catch((err) => {
        res.status(400).json({message: err.message})
      })
    })
    
  // try{
  //   const savedUser = await user.save();
  //   res.status(201).json(savedUser);
  // } catch(err) {
  //   res.status(400).json({message: err.message})
  }


export const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if(!user) return res.status(404).json({message: 'User not found'});
  try{
      const updatedUser = await User.updateOne({_id: req.params.id}, {$set: req.body});
      res.status(200).json(updatedUser);
  } catch(err){
      res.status(400).json({message: err.message});
  }

}

export const deleteUser = async(req, res) => {
  const user = await User.findById(req.params.id);
  if(!user) return res.status(404).json({message: 'No data found'});
  try{
      const deletedUser = await User.deleteOne({_id: req.params.id});
      res.status(200).json(deletedUser)
  } catch(err){
      res.status(400).json({message: err.message})
  }
}