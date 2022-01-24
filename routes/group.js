import express from 'express';
import Group from '../models/Group.js';

const groupRouter = express.Router();

//Create group
groupRouter.get('/', async (req, res) => {
  try{
    const groups = await Group.find();
    res.json(groups);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
})

groupRouter.get('/:id', async(req, res) => {
  try{
    const group = await Group.findById(req.params.id);
    res.json(group);
  } catch(err) {
    res.status(501).json({message: err.message});
  }
})

groupRouter.post('/', async (req, res) => {
  const group = new Group(req.body);
  try{
    const savedGroup = await group.save();
    res.status(201).json(savedGroup);
  } catch(err){
    res.status(400).json({message: err.message})
  }
})

groupRouter.put('/:id', async(req, res) => {
  const group = await Group.findById(req.params.id);
  if(!group) {
    return res.status(400).json({message: 'Group not found'})
  }
  try{
    const updatedGroup = await Group.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json(updatedGroup)
  } catch(err){
    res.status(400).json({message: err.message})
  }
})

groupRouter.delete('/:id', async(req, res) => {
  const group = await Group.findById(req.params.id);
  if(!group) {
    return res.status(400).json({message: 'Group not found'});
  }
  try{
    const deletedGroup  = await Group.deleteOne({_id: req.params.id});
    res.status(200).json(deletedGroup)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})



export default groupRouter;