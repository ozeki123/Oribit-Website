import Item from '../models/Item.js';

export const getItems = async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

export const getItemById = async (req, res) => {
    try{
        const item = await Item.findById(req.params.id);
        res.json(item)
    } catch(err){
        res.status(404).json({message: err.message});
    }
}

export const createItem = async (req, res) => {
    const item = new Item(req.body);
    try{
        const savedItem = await item.save();
        res.status(201).json(savedItem);
    } catch(err){
        res.status(400).json({message: err.message});
    }
}

export const updateItem = async (req, res) => {
    const item = await Item.findById(req.params.id);
    if(!item) return res.status(404).json({message: 'No data found'});
    try{
        const updatedItem = await Item.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedItem);
    } catch(err){
        res.status(400).json({message: err.message});
    }

}

export const deleteItem = async(req, res) => {
    const item = await Item.findById(req.params.id);
    if(!item) return res.status(404).json({message: 'No data found'});
    try{
        const deletedItem = await Item.deleteOne({_id: req.params.id});
        res.status(200).json(deletedItem)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}