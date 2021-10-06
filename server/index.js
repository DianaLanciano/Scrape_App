import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// import mybagRoutes from './routes/mybag.js'

const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// app.use('/mybag', mybagRoutes);

const CONECTION_URL = "mongodb+srv://scrapmybag:scrapmybag123123@cluster0.xinpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

   

