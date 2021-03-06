import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import mybagRoutes from './routes/mybag.js'

const app = express();
dotenv.config();


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/mybag', mybagRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

   

