import express from 'express';
import mongoose from 'mongoose';
import itemRouter from './routes/item.js';
import userRouter from './routes/user.js'
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const uri = process.env.DB_URI;

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connection established with MongoDB')
    })
    .catch(err => console.log(err.message));


const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/items', itemRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => console.log(`Listening on port ${port}`));




