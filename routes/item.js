import express from 'express';
import { getItems,
        getItemById,
        createItem,
        updateItem,
        deleteItem } from '../controllers/itemController.js';
import verifyToken from '../middleware/verifyToken.js';

const itemRouter = express.Router();

itemRouter.get('/', getItems);
itemRouter.get('/:id', getItemById);
itemRouter.post('/', createItem);
itemRouter.put('/:id', updateItem);
itemRouter.delete('/:id', deleteItem);

export default itemRouter;